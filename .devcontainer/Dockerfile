# Hugo Dev Container
FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Install dependencies
RUN apt-get update \
    && apt-get install -y wget git \
    && wget -O /tmp/hugo.deb https://github.com/gohugoio/hugo/releases/download/v0.160.0/hugo_extended_0.160.0_linux-amd64.deb \
    && apt-get install -y /tmp/hugo.deb \
    && rm /tmp/hugo.deb


WORKDIR /workspace

# Expose Hugo default port
EXPOSE 1313

CMD ["hugo", "server", "--bind", "0.0.0.0", "--baseURL", "http://localhost:1313", "--appendPort=false"]
