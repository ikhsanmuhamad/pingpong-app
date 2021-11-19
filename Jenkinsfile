node {
   def commit_id
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"                        
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('Build & Push') {
    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
       def app = docker.build("devlabtwinggo/pingpong-nodejs-app:${commit_id}", '.')
       app.push()
       app.push('latest')
    }
   }
   stage('Deploy') {
      sh "chmod +x changeTag.sh"
      sh "./changeTag.sh ${commit_id}"
      kubernetesDeploy(configs: "deployment-pingpong-app.yaml", kubeconfigId: "kubeconfig")
   }
}
