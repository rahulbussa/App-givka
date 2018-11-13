import {
  Component, Input, OnInit, ViewEncapsulation,
} from '@angular/core';
import { MovieDetails } from '../../../factories/movie-details';
import { BroadcastService } from '../../../services/broadcast.service';

@Component({
  selector: 'movie-details-component',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  encapsulation: ViewEncapsulation.None
  })
export class MovieDetailsComponent implements OnInit {
  @Input() movie: MovieDetails;

  constructor(private broadcast: BroadcastService) {

  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onClickCredit(credit, event) {
    this.broadcast.sendCredit(credit, event);
  }
}
