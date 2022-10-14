# horcrux backend

## installation

runs on php 8.0. Will break for other versions of php

```
$ composer install
$ composer dump-autoload
```

## run locally

```
$ ./run-dev.sh
```

## build

run:
```
$ ./build.sh 
```

## notes

Run this when adding files to /lib

```
$ composer dump-autoload
```

Ensure PHP warnings and error output are disabled on prod. They pollute and break json responses.
see -> https://stackoverflow.com/questions/12872515/php-warning-demolishes-json-response
