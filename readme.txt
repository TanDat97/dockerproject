- How to use docker

// to not type sudo every where
sudo usermod -aG docker ${USER}
su - ${USER}
id -nG

- Using docker consists of passing it a chain of options and commands followed by arguments. The syntax takes this form:
docker [option] [command] [arguments]
docker
docker docker-subcommand --help
docker info

- Docker containers are built from Docker images. By default, Docker pulls these images from Docker Hub, a Docker registry managed by Docker, the company behind the Docker project. 
- Anyone can host their Docker images on Docker Hub, so most applications and Linux distributions you’ll need will have images hosted there.

- To see the images that have been downloaded to your computer, type:
docker images

docker run -it ubuntu

docker ps
docker ps -a
docker ps -l
docker start {ID || name}
docker stop {ID || name}
docker rm {ID || name}

- Committing Changes in a Container to a Docker Image
docker commit -m "What you did to the image" -a "Author Name" container_id repository/new_image_name
example: docker commit -m "added Node.js" -a "tandat" d9b100f2f636 tandat/ubuntu-nodejs

- Pushing Docker Images to a Docker Repository
docker login -u docker-registry-username
docker push docker-registry-username/docker-image-name
docker push tandat/ubuntu-nodejs


- Writing the Dockerfile

https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker


docker build -t dat130497/nodejs-project .
docker images
docker run --name nodejs-image-demo -p 8000:8080 -d dat130497/nodejs-project
docker ps


- delelte all image and container
docker system prune -a
