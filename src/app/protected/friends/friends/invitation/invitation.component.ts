import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Friend} from "../../../../shared/models/friend";

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {

  invitation = this.formBuilder.group(
    {
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
    }
  )

  @Output() invitationCreated = new EventEmitter<Friend>();

  constructor(private formBuilder: FormBuilder) {
  }

  get name(): FormControl {
    return this.invitation.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.invitation.get('email') as FormControl;
  }

  ngOnInit(): void {
  }

  createInvitation() {
    this.invitationCreated.emit({name: this.name.value, email: this.email.value, status: "invited"});
    this.invitation.reset();
  }
}
