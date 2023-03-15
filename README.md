# govcenter
API Governance Center 

``cd metad/``

``yarn``

``docker build --build-arg PROXY_HTTP=http://proxy.cnptia.embrapa.br:3128 --build-arg PROXY_HTTPS=http://proxy.cnptia.embrapa.br:3128 --build-arg PROXY_NO=127.0.0.1,10.129.0.0/16,200.0.70.0/24,2801:80:1400::/48,localhost,.cnptia.embrapa.br,.sbiagro.org.br,.agritempo.gov.br,.agrolivre.gov.br -t embrapa-agroapi/govcenter .``