FROM swift:5.1
RUN apt update -y && apt install -y openssl libssl-dev libcurl4-openssl-dev
WORKDIR /backend
COPY . /backend
RUN swift build
CMD [ "swift", "run" ]