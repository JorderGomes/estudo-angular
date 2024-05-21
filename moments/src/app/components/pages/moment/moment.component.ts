import { Component } from '@angular/core';
import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../moment';
import { Router, ActivatedRoute } from '@angular/router';
import { enviroment } from '../../../../enviroments/enviroment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from '../../../services/messages.service';
import { Comment } from '../../../comment';
import { CommentService } from '../../../services/comment.service';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';


@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent {

  moment?: Moment;
  baseApiUrl = enviroment.baseApiUrl;
  faTimes = faTimes;
  faEdit = faEdit;
  commentForm!: FormGroup;

  constructor(
    private momentService: MomentService,
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.momentService.getMoment(id).subscribe(item => this.moment = item.data);

    this.commentForm = new FormGroup({
      text: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required]),
    });

  }

  get text() {
    return this.commentForm.get('text')!;
  }

  get username() {
    return this.commentForm.get('username')!;
  }

  async removeHandler(id: number) {
    await this.momentService.removeMoment(id).subscribe();
    this.messagesService.addMessage("Momento excluído com sucesso!");
    this.router.navigate(["/"]);
  }

  async onSubmit(formDirective: FormGroupDirective) {
    if (this.commentForm.invalid){
      return
    }
    const data: Comment = this.commentForm.value;
    data.momentId = Number(this.moment!.id);
    await this.commentService
      .createComment(data)
      .subscribe((comment) => this.moment!.comments!.push(comment.data));

    this.commentForm.reset();

    formDirective.resetForm();
  }

}
