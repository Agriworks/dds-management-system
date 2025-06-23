FROM ubuntu:22.04

# Add sources

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends curl postgresql-client \
    ca-certificates

RUN apt-get remove -y nodejs npm

RUN curl -sL https://deb.nodesource.com/setup_20.x | bash && apt-get -y -f install nodejs 

# [Optional] Uncomment the next lines to use go get to install anything else you need
# USER vscode
# RUN go get -x <your-dependency-or-tool>
# USER root

COPY atlasgo.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/atlasgo.sh
# RUN /usr/local/bin/atlasgo.sh

# # [Optional] Uncomment this line to install global node packages.
# SHELL ["/bin/bash", "-c"]
# RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash 
# RUN source ~/.bashrc && nvm install 20 && node -v && npm -v

