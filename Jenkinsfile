pipeline{
    agent any
    tools { maven "maven1"}
    environment {
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages{
        stage ('Maven clean'){
            steps {
                sh 'mvn clean'
            }


        }

        stage ('Maven package'){
            steps {
                sh 'mvn package'
            }


        }




    }




}