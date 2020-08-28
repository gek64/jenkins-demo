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
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh 'cp *.tgz /var/local/'
				dir("/var/local/")
                sh 'tar -xzf /var/local/*.tgz -C /var/local/'
				dir("/var/local/package/")
				sh 'npm install'
                sh 'systemctl restart jenkins-demo'
            }
        }
    }
}