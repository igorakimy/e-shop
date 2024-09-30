<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return parent::toArray($request);
    }

    /**
     * @param Request $request
     * @param array $paginated
     * @param array $default
     * @return array
     */
    public function paginationInformation(Request $request, array $paginated, array $default): array
    {
        $default['meta']['links'] = $this->buildLinks($request, $paginated, $default);
        return $default;
    }

    /**
     * Build pagination links.
     *
     * @param Request $request
     * @param array $paginated
     * @param array $default
     * @return array
     */
    private function buildLinks(Request $request, array $paginated, array $default): array
    {
        $links = [];
        $currentPage = $default['meta']['current_page'];
        $lastPage = $default['meta']['last_page'];
        $currentPageUrl = $this->buildUrl($request, $currentPage);
        $prevPageUrl = $paginated['prev_page_url'];

        if ($prevPageUrl) {
            $links[] = $this->createLinkData($prevPageUrl, 'pagination.previous');
        }

        $leftLinks = [];
        for ($page = 1; $page < 5 && $currentPage - $page > 0; $page++) {
            $leftLinks[] = $this->createLinkData(
                $this->buildUrl($request, $currentPage - $page),
                ($currentPage - $page)
            );
        }
        $leftLinks = array_reverse($leftLinks);
        $links = array_merge($links, $leftLinks);

        $links[] = $this->createLinkData($currentPageUrl, $currentPage, true);

        for ($page = 1; $page < 5 && $currentPage + $page <= $lastPage; $page++) {
            $links[] = $this->createLinkData(
                $this->buildUrl($request, $currentPage + $page),
                ($currentPage + $page)
            );
        }

        return $links;
    }

    /**
     * Build url from request query string.
     *
     * @param Request $request
     * @param int $page
     * @return string
     */
    private function buildUrl(Request $request, int $page): string
    {
        $url = $request->url();

        $query = $request->query();
        $query['page'] = (string) $page;

        if (! empty($query)) {
            $url .= '?' . http_build_query($query);
        }

        return $url;
    }

    /**
     * Create data for new pagination link.
     *
     * @param string $url
     * @param int|string $label
     * @param bool $active
     * @return array
     */
    private function createLinkData(string $url, int|string $label, bool $active = false): array
    {
        return [
            'url' => $url,
            'label' => (string) $label,
            'active' => $active,
        ];
    }
}
