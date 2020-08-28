pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building....'
                bat 'npm ci'
                bat 'npm run dev'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing....'
                bat 'npm ci'
                bat 'npm run dev'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                archiveArtifacts artifacts: '**/dist/*.txt', fingerprint: true
            }
        }
    }
}
