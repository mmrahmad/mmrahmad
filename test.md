```
├── kustomize
│   ├── base
│   │   ├── adservice.yaml
│   │   ├── cartservice.yaml
│   │   ├── checkoutservice.yaml
│   │   ├── currencyservice.yaml
│   │   ├── emailservice.yaml
│   │   ├── frontend.yaml
│   │   ├── kustomization.yaml
│   │   ├── loadgenerator.yaml
│   │   ├── paymentservice.yaml
│   │   ├── productcatalogservice.yaml
│   │   ├── recommendationservice.yaml
│   │   ├── redis.yaml
│   │   └── shippingservice.yaml
│   ├── components
│   │   ├── alloydb
│   │   ├── container-images-registry
│   │   ├── container-images-tag
│   │   ├── container-images-tag-suffix
│   │   ├── cymbal-branding
│   │   ├── google-cloud-operations
│   │   ├── memorystore
│   │   ├── network-policies
│   │   ├── non-public-frontend
│   │   ├── service-accounts
│   │   ├── service-mesh-istio
│   │   ├── single-shared-session
│   │   ├── spanner
│   │   └── without-loadgenerator
│   ├── kustomization.yaml
│   ├── README.md
│   └── tests
│       ├── memorystore-with-all-components
│       ├── README.md
│       ├── service-mesh-istio-with-all-components
│       └── spanner-with-all-components
├── LICENSE
├── Makefile
├── protos
│   ├── demo.proto
│   └── grpc
│       └── health
├── README.md
├── release
│   ├── istio-manifests.yaml
│   └── kubernetes-manifests.yaml
├── scripts
│   ├── run-service.sh
│   └── sqlc.sh
├── skaffold.yaml
├── sqlc.yaml

```
