#!/bin/bash

# Copy to Linode
# This needs to be changed from rsync to sftp
echo "**********************"
echo "* DEPLOYING Homepage *"
echo "**********************"
echo ""
echo "Copying index.html..."
rsync -avP index.html my_webapp@theadamcooper.com:/var/www/my_webapp/www
echo "Copying stylesheet.css..."
rsync -avP css/stylesheet.css my_webapp@theadamcooper.com:/var/www/my_webapp/css
echo "Done!"
echo "Deployment complete. Visit http://theadamcooper.com to confirm."
