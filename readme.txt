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



Dockerfile là một tập tin dạng text chứa một tập các câu lệnh để tạo mới một Image trong Docker.
Một số lệnh trong Dockerfile:

FROM <base_image>:<phiên_bản>: đây là câu lệnh bắt buộc phải có trong bất kỳ Dockerfile nào. Nó dùng để khai báo base Image mà chúng ta sẽ build mới Image của chúng ta.
MAINTAINER <tên_tác_giả>: câu lệnh này dùng để khai báo trên tác giả tạo ra Image, chúng ta có thể khai báo nó hoặc không.
RUN <câu_lệnh>: chúng ta sử dụng lệnh này để chạy một command cho việc cài đặt các công cụ cần thiết cho Image của chúng ta.
CMD <câu_lệnh>: trong một Dockerfile thì chúng ta chỉ có duy nhất một câu lệnh CMD, câu lệnh này dùng để xác định quyền thực thi của các câu lệnh khi chúng ta tạo mới Image.
ADD <src> <dest>: câu lệnh này dùng để copy một tập tin local hoặc remote nào đó (khai báo bằng <src>) vào một vị trí nào đó trên Container (khai báo bằng dest).
ENV <tên_biến>: định nghĩa biến môi trường trong Container.
ENTRYPOINT <câu_lệnh>: định nghĩa những command mặc định, cái mà sẽ được chạy khi container running.
VOLUME <tên_thư_mục>: dùng để truy cập hoặc liên kết một thư mục nào đó trong Container.