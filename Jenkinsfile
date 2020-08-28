pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building....'
                sh 'npm ci'
                sh 'npm pack'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing....'
                sh 'npm ci'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'cp *.tgz /var/local/'
                sh 'tar -xzf /var/local/*.tgz'
                sh 'systemctl restart jenkins-demo'
            }
        }
    }
}
