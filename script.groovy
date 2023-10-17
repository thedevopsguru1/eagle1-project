# https://stackoverflow.com/questions/37800195/how-do-you-load-a-groovy-file-and-execute-it
# https://bhadrajatin.medium.com/include-a-common-groovy-script-in-jenkins-file-fd3d2c3a8bee
def buildJar() {
    echo "building the application..."
    sh 'mvn package'
} 

def buildImage() {
    echo "building the docker image..."
    withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
        sh 'docker build -t nanajanashia/demo-app:jma-2.0 .'
        sh "echo $PASS | docker login -u $USER --password-stdin"
        sh 'docker push nanajanashia/demo-app:jma-2.0'
    }
} 

def deployApp() {
    echo 'deploying the application...'
} 

return this
