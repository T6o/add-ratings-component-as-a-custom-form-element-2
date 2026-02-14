import {TestBed} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import {MoviesService} from './movies.service';


describe("Movies Service", () => {

  const myFakeHttpClient = {
    get: () => of([
      {
        "id": "e80d5a37-620e-4be2-92b9-fb1f5262494f",
        "title": "Harry Potter and the Philosopher's Stone",
        "duration": "152",
        "budget": "125",
        "release_date": "2001-11-04"
      }, {
        "id": "1e04ad42-c21f-40d3-9a7e-0a521980c192",
        "title": "Harry Potter and the Chamber of Secrets",
        "duration": "161",
        "budget": "125",
        "release_date": "2002-11-15"
      }
      ])
  }

  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: HttpClient, useValue: myFakeHttpClient}],
    });
    service = TestBed.inject(MoviesService);
 });

  it("should return all movies by default", (done) => {
    service.filterMovieList().subscribe(movies => {
      expect(movies.length).toBe(2);
      done();
    });
  })

  it("should filter movies by title", (done) => {
    service.filterMovieList("Cha").subscribe(movies => {
      expect(movies.length).toBe(1);
      expect(movies[0].title).toEqual("Harry Potter and the Chamber of Secrets");
      done();
    });
  })

  it("should filter movies by year", (done) => {
    service.filterMovieList("", "2001").subscribe(movies => {
      expect(movies.length).toBe(1);
      expect(movies[0].title).toEqual("Harry Potter and the Philosopher's Stone");
      done();
    });
  })
})
