
pipeline {
    agent any

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
                sh '''
                    docker rm -f website-test 2>/dev/null || true
                    docker run -d --name website-test -p 8082:80 ishant-website:latest
                    sleep 3
                    curl --fail http://localhost:8082
                    docker rm -f website-test
                '''
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKERHUB_USER',
                    passwordVariable: 'DOCKERHUB_TOKEN'
                )]) {
                    sh '''
                        echo "$DOCKERHUB_TOKEN" | docker login -u "$DOCKERHUB_USER" --password-stdin
                        docker tag ishant-website:latest "$DOCKERHUB_USER/ishant-cicd-demo:latest"
                        docker push "$DOCKERHUB_USER/ishant-cicd-demo:latest"
                        docker logout
                    '''
                }
            }
        }
    }

    post {
        always {
            sh 'docker rm -f website-test 2>/dev/null || true'
        }
    }
}
