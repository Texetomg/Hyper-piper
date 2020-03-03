FROM swift:5.1
RUN apt update -y && apt install -y openssl libssl-dev libcurl4-openssl-dev
COPY . /backend
WORKDIR /backend
RUN swift build
CMD [ "swift", "run" ]