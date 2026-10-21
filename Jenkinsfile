
pipeline {
    agent any

    environment {
        IMAGE_NAME = 'ishant-website'
        CONTAINER_NAME = 'my-website'
    }

    stages {
        stage('Pull Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ishant-website:latest .'
            }
        }

        stage('Test Website') {
            steps {
                sh 'docker run -d --name website-test -p 8082:80 ishant-website:latest'
                sh 'sleep 3'
                sh 'curl --fail http://localhost:8082'
                sh 'docker rm -f website-test'
            }
        }
    }
}
0

