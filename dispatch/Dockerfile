FROM golang:1.21-alpine

WORKDIR /go/src/dispatch

# Copy source code
COPY main.go .

# Build without Go modules (GOPATH mode)
ENV GO111MODULE=off

RUN go get github.com/rabbitmq/amqp091-go && \
    go build -o dispatch

EXPOSE 8080

CMD ["./dispatch"]

