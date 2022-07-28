FROM buildkite/puppeteer:latest
RUN wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
RUN apt-get update && apt-get install -y procps
ENV PUPPETEER_EXECUTABLE_PATH="/usr/bin/google-chrome-stable"
RUN mkdir /app
WORKDIR /app
COPY . .
RUN yarn install
