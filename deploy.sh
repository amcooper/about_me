#!/bin/bash

# Copy to Linode
echo "**********************"
echo "* DEPLOYING Homepage *"
echo "**********************"
echo ""
echo "Copying index.html, start.html..."
rsync -avP index.html start.html 66.175.210.14:/var/www/theadamcooper.com
echo "Copying stylesheet.css..."
rsync -avP css/stylesheet.css 66.175.210.14:/var/www/theadamcooper.com/css
echo "Done!"
echo "Deployment complete. Visit http://66.175.210.14 to confirm."
