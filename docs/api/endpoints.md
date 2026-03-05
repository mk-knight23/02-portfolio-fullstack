# API Documentation - Full Stack Development

## Base URL

```
Production: https://02-portfolio-fullstack.vercel.app/api
Local: http://localhost:3000/api
```

## Authentication

Most endpoints require authentication via Bearer token:

```
Authorization: Bearer <your_token>
```

## Endpoints

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2026-03-06T00:00:00Z",
  "version": "1.0.0"
}
```

### GET /api/data
Retrieve application data.

**Query Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| limit | number | Max items to return |
| offset | number | Pagination offset |
| sort | string | Sort field |

**Response:**
```json
{
  "data": [],
  "pagination": {
    "total": 100,
    "limit": 20,
    "offset": 0
  }
}
```

### POST /api/data
Create new data entry.

**Request Body:**
```json
{
  "name": "string",
  "value": "string",
  "metadata": {}
}
```

**Response:**
```json
{
  "id": "uuid",
  "created_at": "2026-03-06T00:00:00Z",
  ...
}
```

### PUT /api/data/:id
Update existing data.

**Request Body:**
```json
{
  "name": "string (optional)",
  "value": "string (optional)"
}
```

### DELETE /api/data/:id
Delete data entry.

**Response:**
```json
{
  "success": true,
  "message": "Deleted successfully"
}
```

## Error Responses

All errors follow this format:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message",
    "details": {}
  }
}
```

### Common Error Codes

| Code | Status | Description |
|------|--------|-------------|
| UNAUTHORIZED | 401 | Authentication required |
| FORBIDDEN | 403 | Insufficient permissions |
| NOT_FOUND | 404 | Resource not found |
| VALIDATION_ERROR | 422 | Invalid input data |
| INTERNAL_ERROR | 500 | Server error |

## Rate Limiting

API requests are limited to:
- 100 requests per minute for authenticated users
- 20 requests per minute for unauthenticated users

## Webhooks

Webhooks can be configured for real-time updates.

**Event Types:**
- `data.created`
- `data.updated`
- `data.deleted`

**Payload Format:**
```json
{
  "event": "data.created",
  "timestamp": "2026-03-06T00:00:00Z",
  "data": {}
}
```

---

Last Updated: 2026-03-06
