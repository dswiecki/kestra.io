---
order: 6
---
# Micronaut configuration

Since Kestra is a Java app based on micronaut, you can configure micronaut to fit your needs.
We will not explain all the configuration values possible, these are available [here](https://docs.micronaut.io/1.3.7/guide/index.html). However, we will provide some tips on the most useful options:

## Configure log Level
```yaml
logger:
  levels:
    io.kestra.runner: TRACE
    org.elasticsearch.client: TRACE
    org.elasticsearch.client.sniffer: TRACE
    org.apache.kafka: DEBUG
    io.netty.handler.logging: TRACE
```

## Configure port and scheme
```yaml
micronaut:
  server:
    port: 8086
  ssl:
    enabled: true
    keyStore:
      path: classpath:server.p12
      password: mypassword
      type: PKCS12
```

## Configure the timeout or max uploaded file size
A lot of configurations affect these, here is the default configuration:
```yaml
micronaut:
  server:
    max-request-size: 10GB
    multipart:
      max-file-size: 10GB
      disk: true
    read-idle-timeout: 60m
    write-idle-timeout: 60m
    idle-timeout: 60m
    netty:
      max-chunk-size: 10MB
```

## Changing base path
If behind a reverse proxy, you can change the base path:
```yaml
micronaut:
  server:
    context-path: "kestra-prd"
```


## Changing host resolution
If behind a reverse proxy,  you can change host resolution (http / https / domain name) providing the header sent by your reverse proxy:
```yaml
micronaut:
  server:
    host-resolution:
      host-header: Host
      protocol-header: X-Forwarded-Proto
```
