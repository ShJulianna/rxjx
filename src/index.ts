import { ajax } from 'rxjs/ajax';
import { forkJoin } from "rxjs";

forkJoin({
    data: ajax.getJSON('https://api.github.com/search/repositories?q=rxjs'),
    dataGitLab: ajax.getJSON('https://gitlab.com/api/v4/projects?search=nodejs')
})
    .subscribe(console.log)
//
// const data$ = ajax.getJSON('https://api.github.com/search/repositories?q=rxjs');
//
// data$.subscribe((value) => console.log('data$ value', value));
//
// const dataGitLab$ = ajax.getJSON('https://gitlab.com/api/v4/projects?search=nodejs');
//
// dataGitLab$.subscribe((value) => console.log('dataGitLab$ value', value));