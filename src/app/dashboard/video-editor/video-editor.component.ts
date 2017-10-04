import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/debounceTime';


@Component({
  selector: 'app-video-editor',
  templateUrl: './video-editor.component.html',
  styleUrls: ['./video-editor.component.css']
})
export class VideoEditorComponent implements OnDestroy {

  title = new FormControl('');
  author = new FormControl('');
  titleSub: Subscription;
  authorSub: Subscription;
  combinedSub: Subscription;

  constructor() {
    this.titleSub = this.title.valueChanges.subscribe(x => console.log('title', x));
    this.authorSub = this.author.valueChanges.subscribe(x => console.log('author', x));

    const validTitle = this.title.valueChanges
      .startWith(this.title.value)
      .map(val => val.trim())
      .filter(val => val !== '');

    const validAuthor = this.author.valueChanges
      .startWith(this.author.value)
      .map(val => val.trim())
      .filter(val => val !== '');

    const combinedCriteria$ = Observable.combineLatest(
      validTitle, validAuthor, (title, author) => ({ title, author })
    );

    this.combinedSub = combinedCriteria$
      .debounceTime(500)
      .subscribe(val => console.log('change', val));
  }

  ngOnDestroy() {
    this.titleSub.unsubscribe();
    this.authorSub.unsubscribe();
    this.combinedSub.unsubscribe();
  }

}
