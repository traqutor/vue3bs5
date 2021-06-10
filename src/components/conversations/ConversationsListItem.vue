<template>
  <a href="/medical/index.php?page=chat&amp;chat=5"
     class="list-group-item p-2 mt-1 rounded list-group-item-action list-group-dialog hover-action-group border-0 has-new visible">
    <div class="toggle-action-control pt-4 h-100">
      <label class="m-0 toggle-input toggle-input-success select-all-items">
        <input type="checkbox" class="is-select-item" name="age">
        <span class="input-icon f-icon-20"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-circle"><circle cx="12"
                                                                                       cy="12"
                                                                                       r="10"></circle></svg><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="feather feather-check-circle"><path
            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline
            points="22 4 12 14.01 9 11.01"></polyline></svg></span>
      </label>
    </div>
    <div class="media list-item-media dialog-media">

      <figure class="avatar avatar-xm mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
             stroke-linejoin="round" class="feather feather-briefcase-1 f-icon-24">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path
              d="M 16 7 L 16 5 C 16 3.895 15.105 3 14 3 L 10 3 C 8.895 3 8 3.895 8 5 L 8 7"></path>
          <polyline
              points="20.126 12.362 15.182 12.362 13.533 14.834 10.238 14.834 8.59 12.362 3.646 12.362"></polyline>
        </svg>
      </figure>

      <div class="media-body overflow-hidden ml-n1 is-filtered">
        <div class="media">
          <div class="media-body overflow-hidden">
            <div class="d-flex align-items-center overflow-hidden">
              <div class="text-truncate f-size-15 text-dark font-weight-middle">Bessy Carter<span
                  class="text-secondary font-weight-normal f-size-14 ml-2">Shared role</span></div>
              <div class="ml-2 text-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                     stroke-linejoin="round" class="feather feather-clock text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div class="text-nowrap ml-auto pl-3 text-muted is-filter-ignore f-size-11">
                10/06/2020
              </div>
            </div>
          </div>

        </div>
        <div class="media justify-content-between align-items-center pt-1">
          <div class="media align-items-center dialog-msg overflow-hidden">
            <div class="media-body f-size-13 text-truncate font-weight-middle">Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore
            </div>
          </div>
          <span
              class="badge badge-primary badge-pill font-weight-normal f-size-11 ml-2 is-filter-ignore">10</span>
        </div>
      </div>
    </div>

    <div class="btn-group-sm btn-group-vertical rounded hover-action-control bg-light rounded">

      <div class="btn-group dropleft dropdown flex-fill" role="group">
        <button type="button" class="btn btn-light p-1 shadow-none border-0 toggle-action-active"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" class="feather feather-more-vertical f-icon-18">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </button>
        <div class="dropdown-menu dropdown-menu-right dropdown-menu-sm shadow cursor-default">
          <button type="button" class="dropdown-item px-3 d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round"
                 class="feather feather-message-square mr-3 text-secondary f-icon-18">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span class="ml-n1">Mark as Read</span>
          </button>
          <button type="button"
                  class="dropdown-item px-3 d-flex align-items-center dropdown-trigger-toggle"
                  dropdown-trigger=".qreply-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round"
                 class="feather feather-arrow-reply mr-3 text-secondary f-icon-18">
              <path
                  d="M 2.374 11.973 C 1.942 11.568 1.942 10.882 2.374 10.478 L 8.977 4.311 C 9.631 3.7 10.698 4.164 10.698 5.058 L 10.698 7.808 L 11.759 7.808 C 14.384 7.808 16.853 8.678 18.71 10.261 C 20.567 11.842 21.897 15.865 21.897 18.102 L 21.931 19.768 C 21.931 20.664 21.791 20.441 21.136 19.83 L 19.974 18.534 C 17.633 16.348 14.17 14.673 10.698 14.644 L 10.698 17.392 C 10.698 18.288 9.631 18.751 8.977 18.141 L 2.374 11.973 Z"></path>
            </svg>
            <span class="ml-n1">Quick Reply</span>
          </button>
          <button type="button" class="dropdown-item px-3 d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round"
                 class="feather feather-whisper-message mr-3 text-secondary f-icon-18">
              <path
                  d="M 23.433 19.095 C 26.576 17.382 26.687 12.908 23.63 11.042 C 22.901 10.597 22.064 10.363 21.21 10.362 L 20.038 10.362 C 18.605 4.815 11.703 2.903 7.619 6.916 C 4.797 9.689 4.639 14.187 7.257 17.151"
                  transform="matrix(0.186127, 0.982526, -0.982526, 0.186127, 24.445436, -5.637602)"></path>
              <path d="M 19.184 9.439 C 18.453 6.609 14.932 5.633 12.847 7.681"
                    transform="matrix(0.897932, 0.440135, -0.440135, 0.897932, 5.162175, -6.230948)"></path>
              <path
                  d="M 11.383 16.366 C 11.383 16.972 10.892 17.46 10.288 17.46 L 3.72 17.46 L 1.53 19.65 L 1.53 10.893 C 1.53 10.288 2.02 9.797 2.625 9.797 L 10.288 9.797 C 10.892 9.797 11.383 10.288 11.383 10.893 Z"></path>
            </svg>
            <span class="ml-n1">Whisper</span>
          </button>
          <button type="button"
                  class="dropdown-item px-3 d-flex align-items-center toggle-item-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round"
                 class="feather feather-eye-off mr-3 text-secondary f-icon-18">
              <path
                  d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
            <span class="ml-n1">Hide</span>
          </button>
        </div>
      </div>

      <div class="dropdown">
        <div class="toggle-action-active qreply-5" data-toggle="dropdown" aria-haspopup="true"
             aria-expanded="false"></div>
        <div class="dropdown-menu dropdown-menu-right dropdown-menu-sm shadow cursor-default">
          <div class="dropdown-item-text px-2 py-0 f-size-16 joypixels-group text-nowrap">
            <i data-joypixels="thumbsup" class="joypixels-icon on-hover"><img class="joypixels"
                                                                              alt="👍"
                                                                              title=":thumbsup:"
                                                                              src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/1f44d.png"></i>
            <i data-joypixels="thumbsdown" class="joypixels-icon on-hover"><img class="joypixels"
                                                                                alt="👎"
                                                                                title=":thumbsdown:"
                                                                                src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/1f44e.png"></i>
            <i data-joypixels="heart" class="joypixels-icon on-hover"><img class="joypixels"
                                                                           alt="❤️" title=":heart:"
                                                                           src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/2764.png"></i>
            <i data-joypixels="slight_smile" class="joypixels-icon on-hover"><img class="joypixels"
                                                                                  alt="🙂"
                                                                                  title=":slight_smile:"
                                                                                  src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/1f642.png"></i>
            <i data-joypixels="frowning2" class="joypixels-icon on-hover"><img class="joypixels"
                                                                               alt="☹️"
                                                                               title=":frowning2:"
                                                                               src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/2639.png"></i>
            <i data-joypixels="question" class="joypixels-icon on-hover"><img class="joypixels"
                                                                              alt="❓"
                                                                              title=":question:"
                                                                              src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/2753.png"></i>
            <i data-joypixels="bangbang" class="joypixels-icon on-hover"><img class="joypixels"
                                                                              alt="‼️"
                                                                              title=":bangbang:"
                                                                              src="https://cdn.jsdelivr.net/joypixels/assets/6.0/png/unicode/64/203c.png"></i>
          </div>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item px-3">Call me later, please</button>
          <button class="dropdown-item px-3">I’m on my way</button>
          <button class="dropdown-item px-3">I’ll call you ASAP</button>
          <button class="dropdown-item px-3">I’m not available right now</button>
        </div>
      </div>

    </div>

  </a>
</template>
<script>
export default {
  props: {
    conversation: Object
  },
  setup() {

  }
}
</script>
