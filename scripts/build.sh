eval $(minikube -p minikube docker-env)
docker build . -t local/hello-world
