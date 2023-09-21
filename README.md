# sqlite-experiments
Just bunch of experiments

### Memory without WAL
```shell
Running 10s test @ http://localhost:3000/users
  10 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    52.49ms    5.89ms 163.62ms   94.17%
    Req/Sec   759.29     70.34   810.00     92.70%
  75705 requests in 10.03s, 632.89MB read
  Socket errors: connect 0, read 638, write 0, timeout 0
Requests/sec:   7547.44
Transfer/sec:     63.10MB
```

### Memory with WAL
```shell
Running 10s test @ http://localhost:3000/users
  10 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    53.00ms    5.58ms 147.54ms   94.72%
    Req/Sec   751.81     65.02   808.00     93.30%
  74940 requests in 10.03s, 626.49MB read
  Socket errors: connect 0, read 684, write 0, timeout 0
Requests/sec:   7471.59
Transfer/sec:     62.46MB
```

### Disk without WAL
```shell
Running 10s test @ http://localhost:3000/users
  10 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    55.10ms    6.63ms 149.18ms   95.27%
    Req/Sec   721.84     71.27   808.00     90.00%
  71970 requests in 10.03s, 601.66MB read
  Socket errors: connect 0, read 485, write 0, timeout 0
Requests/sec:   7172.80
Transfer/sec:     59.96MB
```

### Disk with WAL
```shell
Running 10s test @ http://localhost:3000/users
  10 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    52.06ms    5.16ms 131.28ms   95.02%
    Req/Sec   763.68     57.11   818.00     91.80%
  76125 requests in 10.03s, 636.40MB read
  Socket errors: connect 0, read 816, write 0, timeout 0
Requests/sec:   7590.37
Transfer/sec:     63.45MB
```