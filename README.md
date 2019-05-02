# usage

###`./site_builder -help`
  
  `-folder` string 
  source folder
  
  `-generate`
        generate file, otherwise run local web server
  
  `-port` int
        web port (default 8080)
  
  `-s`    enable silent mode


###`docker run -it --rm -v ${HOME}/.ssh:/root/.ssh -e GIT_URL='repository-url' -e GIT_EMAIL='customer-email' -e GIT_NAME='customer-name' kupolua/site-builder`
