FROM golang:1.21-alpine

# Install git (REQUIRED for go get)
RUN apk add --no-cache git

WORKDIR /go/src/dispatch

# Copy source code
COPY main.go .

# Build without Go modules (GOPATH mode)
ENV GO111MODULE=off

RUN go get github.com/rabbitmq/amqp091-go && \
    go build -o dispatch

EXPOSE 8080

CMD ["./dispatch"]

