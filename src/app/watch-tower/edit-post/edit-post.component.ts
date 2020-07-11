import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  postForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      'title': new FormControl(null),
      // 'subtitle': new FormControl(null),
      // 'text': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.postForm.getRawValue());
  }

}
