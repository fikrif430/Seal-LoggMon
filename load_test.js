import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 10,
    duration: '30s',
};

export default function () {
    let res = http.get('http://34.224.85.1');
    check(res, { 'status was 200': (r) => r.status === 200 });
    sleep(1);
}