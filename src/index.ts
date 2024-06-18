import { ajax } from 'rxjs/ajax';
import { forkJoin } from "rxjs";

forkJoin({
    data: ajax.getJSON('https://api.github.com/search/repositories?q=rxjs'),
    dataGitLab: ajax.getJSON('https://gitlab.com/api/v4/projects?search=nodejs')
})
    .subscribe(console.log)
