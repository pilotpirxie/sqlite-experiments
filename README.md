# sqlite-experiments
Just bunch of experiments with sqlite3, better-sqlite3 and fastify.

## Read performance

### Memory without WAL

Run using:
```shell
wrk -t10 -c400 -d10s http://localhost:3000/users
```

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

## Write performance

Run using:
```shell
wrk -t10 -c400 -d10s -s ./post.lua http://localhost:3000/users
```

### Memory without WAL
```shell
Running 10s test @ http://localhost:3000/users
  10 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    13.07ms    2.07ms  36.47ms   83.48%
    Req/Sec     3.06k   310.09     3.37k    93.00%
  304216 requests in 10.01s, 65.17MB read
  Socket errors: connect 0, read 601, write 0, timeout 0
Requests/sec:  30379.90
Transfer/sec:      6.51MB
```

### Memory with WAL
```shell
Running 10s test @ http://localhost:3000/users
  10 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    13.07ms    2.08ms  38.39ms   84.39%
    Req/Sec     3.06k   302.34     3.40k    94.00%
  304290 requests in 10.02s, 65.19MB read
  Socket errors: connect 0, read 668, write 0, timeout 0
Requests/sec:  30380.83
Transfer/sec:      6.51MB
```

### Disk without WAL
```shell
Running 10s test @ http://localhost:3000/users
  10 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   101.99ms   11.61ms 224.72ms   91.32%
    Req/Sec   389.38     32.43   474.00     81.10%
  38850 requests in 10.04s, 8.29MB read
  Socket errors: connect 0, read 732, write 0, timeout 0
Requests/sec:   3871.27
Transfer/sec:    845.76KB
```

### Disk with WAL
```shell
Running 10s test @ http://localhost:3000/users
  10 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.05ms    1.94ms  54.48ms   79.64%
    Req/Sec     2.21k   175.19     2.40k    95.60%
  220006 requests in 10.01s, 47.10MB read
  Socket errors: connect 0, read 643, write 0, timeout 0
Requests/sec:  21969.39
Transfer/sec:      4.70MB
```