.PHONY: help serve

help:
	@echo "Usage:"
	@echo "  make serve   # Serve current directory via basic-http-server"
	@echo "  make help    # Show this help message"

serve:
	@echo "Starting basic-http-server on http://127.0.0.1:4000"
	~/.cargo/bin/basic-http-server .
