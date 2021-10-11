pipeline {
    agent {
        docker {
            image 'mrts/docker-python-nodejs-google-chrome'
            args '-p 3000:3000'
        }
    }
    environment {
        HOME="."
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('run') {
            steps {
                sh 'npm start &'
            }
        }

        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}