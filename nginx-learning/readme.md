# About this repo
This repo contains some notes and a basic Docker project that I've used to learn NGINX basic concepts.

# Running
1. `docker build . -t $IMAGE_NAME` - Create the image
2. `docker run -d -p $HOST_PORT:8080 $IMAGE_NAME` - Run the image on daemon mode
3. `docker exec -it $CONTAINER_ID sh` - If you desire to enter the running container through terminal


# About NGINX
## What is NGINX?
NGINX server works as a reverse proxy.
The browser sends the request to the NGINX, than NGINX communicates with the real server and return to the browser. 
One of the use cases of NGINX is to control the networking traffic, acting as a load balancer.
Another use case is to encrypt data only once on the NGINX server, instead on each server.

## What NGINX stands for!?
Nothing. But is pronounced "engine x".

## How it works
NGINX installation creates a folder which contains all the NGINX stuff. `Nginx.conf` is the main configuration file of the server. It also install a command line tool for management, accessed through keyword `nginx`. 

# Commands
- `nginx` -> Starts the server
- `nginx -v` -> Shows nginx version
- `nginx -t` -> Show nginx folder path and also performs a syntax check
- `nginx -s reload` -> Reloads Nginx server

# Terminology
- Key value pairs nginx.conf -> directives
- blocks of code "{}" -> contexts

# Concepts
## Mime Types
Types of file and how NGINX should interpret files.
The file mime.types contains availables mime types.