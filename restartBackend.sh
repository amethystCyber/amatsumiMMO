  #!/bin/bash

  echo "Hello Marcelo, now restarting Amatsumi Backend Server"

  pm2 stop all

  echo "stopped current server instance"

  pm2 start index.js

  echo "Successfully restarted Amatsumi Backend Server, goodbye Marcelo!"