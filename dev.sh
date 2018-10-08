#!/bin/bash
echo "corriendo en el puerto 10405"
docker run --rm -ti -v $(pwd)/src:/src -p 10405:4200 apps-ui /bin/sh
