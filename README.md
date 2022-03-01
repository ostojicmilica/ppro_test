<div id="top"></div>
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">DevOps Engineering Challenge</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>



## DevOps Engineering Challenge

Create a minimalistic local Kubernetes environment for running a NodeJS application that connects to a database, retrieves the "Hello World"
string from it and returns it as a reply to an HTTP request. There should be two infrastructure environments, Dev and Prod.

### Requirements

All resources should be managed in your code (i.e. Infrastructure as Code approach).
The application itself is expected to be deployed directly without using pre-existing images (like the images publicly available from DockerHub).
Publicly-available images are allowed to be used for the underlying “infrastructure” pieces, like DB.
Dev and Prod environments must be configured using a template tool (e.g. HELM, Kustomize, jsonnet, etc.)
Keep the solution simple, but make sure to apply best practices where you see them fit.

### Tools

The following tools are expected to be used for completing this challenge:
* Container management: Kubernetes.
* Cluster management: Minikube.
* Deployable artifact: Docker image created from the provided Dockerfile.
* Deployment method: Kubernetes YAML files / HELM.
* Infrastructure environment templating: HELM / Kustomize / jsonnet.
* Allowed scripting language: Bash, Python, Ruby or Go.

### Deliverables

A link to a publicly available git repo with:
* Dockerfile (one or several, depending on your design) containing the build of a deployable artifact, like a Docker image with an
application inside.
* Kubernetes manifests / HELM charts to deploy this app to a Kubernetes cluster.
* Deployment script that rolls out all resources to the cluster.
* Create README.md with step-by-step instructions on how to get from cloning your public repo to opening your hello-world application
running in Minikube in a web browser and seeing the "Hello World" phrase (no need for a fancy web page, a line of text is sufficient).

What we will look for when checking out your solution:
* Functionality and working state of the setup and the application you are deploying.
* Cleanliness and simplicity of the automated infrastructure.
* Clearness and structure of the documentation.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get from cloning this repo to setting up `hello-world` application please follow these simple steps.

### Prerequisites

If you don't have kubectl and minkube installed you can run `install_minikube.sh` script with `isntall` command to do so, afterwards you can remove those tools with the same script using `remove` command 

* kubectl & minkiube
  ```sh
  ./scripts/install_minikube.sh [install|remove] <installation_path>
  ```
* start Minkube
  ```sh
  minikube start --vm
  ```
* install Helm
  ```sh
  curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
  ```


### Installation

Below is an example of how you can set up an app. All scripts should be run from the root of project.

1. Clone the repo
   ```sh
   git clone https://github.com/ostojicmilica/ppro_test.git
   ```
2. Build an application
   ```sh
   ./scripts/build.sh
   ```
3. Roll out all resources to the cluster
   ```sh
   ./scripts/deploy.sh
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

These commands should print the URL of the hello-world Services on dev and prod.

  ```sh
  minikube service hello-world --url -n dev
  minikube service hello-world --url -n prod
  ```

You can open the URL in a web browser.

<p align="right">(<a href="#top">back to top</a>)</p>
