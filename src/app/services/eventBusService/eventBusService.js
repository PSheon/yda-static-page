import FuseUtils from '@fuse/FuseUtils';
import axios from 'axios';
import formurlencoded from 'form-urlencoded';

import { AUTH_REST_BASE_END_POINT } from 'app/fuse-configs/envsConfig';

class eventBusService extends FuseUtils.EventEmitter {
  /* Get Uploaded Images */
  getUploadedImages = (
    routeParams = {
      page: 1,
      limit: 20,
      sort: 'updatedAt',
      order: -1
    }
  ) => {
    return new Promise((resolve, reject) => {
      axios
        .get(AUTH_REST_BASE_END_POINT + '/api/image', {
          params: routeParams
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  /* Delete Image by imageId */
  deleteImage = imageId => {
    return new Promise((resolve, reject) => {
      axios
        .delete(AUTH_REST_BASE_END_POINT + '/api/image/' + imageId)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  /* Update Image by imageId */
  updateImageById = imageDetail => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          AUTH_REST_BASE_END_POINT + '/api/image/update',
          formurlencoded(imageDetail)
        )
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  /* Get Uploaded Documents */
  getUploadedDocuments = (
    routeParams = {
      page: 1,
      limit: 20,
      sort: 'updatedAt',
      order: -1
    }
  ) => {
    return new Promise((resolve, reject) => {
      axios
        .get(AUTH_REST_BASE_END_POINT + '/api/document', {
          params: routeParams
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  /* Delete Document by documentId */
  deleteDocument = documentId => {
    return new Promise((resolve, reject) => {
      axios
        .delete(AUTH_REST_BASE_END_POINT + '/api/document/' + documentId)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  /* Create or Update carousel */
  createOrUpdateCarousel = carouselDetail => {
    return new Promise((resolve, reject) => {
      if (carouselDetail._id === 'new') {
        /* Create a carousel */
        axios
          .post(
            AUTH_REST_BASE_END_POINT + '/api/carousel',
            formurlencoded(carouselDetail)
          )
          .then(response => {
            if (response.data) {
              resolve(response.data);
            }
            // else {
            // 	reject(response.data.error);
            // }
          })
          .catch(error => {
            reject(error);
          });
      } else {
        /* Update a carousel */
        axios
          .post(
            AUTH_REST_BASE_END_POINT + '/api/carousel/update',
            formurlencoded(carouselDetail)
          )
          .then(response => {
            if (response.data) {
              resolve(response.data);
            }
            // else {
            // 	reject(response.data.error);
            // }
          })
          .catch(error => {
            reject(error);
          });
      }
    });
  };
  /* Delete carousel */
  deleteCarousel = carouselId => {
    return new Promise((resolve, reject) => {
      axios
        .delete(AUTH_REST_BASE_END_POINT + '/api/carousel/' + carouselId)
        .then(response => {
          if (response.data) {
            resolve(response.data);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  /* Get Home Page Speakers */
  getHomePageSpeakers = (
    routeParams = {
      page: 1,
      limit: 20,
      sort: 'updatedAt',
      order: -1
    }
  ) => {
    return new Promise((resolve, reject) => {
      axios
        .get(AUTH_REST_BASE_END_POINT + '/api/speaker', {
          params: routeParams
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  /* Create or Update Speaker */
  createOrUpdateSpeaker = speakerDetail => {
    return new Promise((resolve, reject) => {
      if (speakerDetail._id === 'new') {
        /* Create a news */
        axios
          .post(
            AUTH_REST_BASE_END_POINT + '/api/speaker',
            formurlencoded(speakerDetail)
          )
          .then(response => {
            if (response.data) {
              resolve(response.data);
            }
            // else {
            // 	reject(response.data.error);
            // }
          })
          .catch(error => {
            reject(error);
          });
      } else {
        /* Update a news */
        axios
          .post(
            AUTH_REST_BASE_END_POINT + '/api/speaker/update',
            formurlencoded(speakerDetail)
          )
          .then(response => {
            if (response.data) {
              resolve(response.data);
            }
            // else {
            // 	reject(response.data.error);
            // }
          })
          .catch(error => {
            reject(error);
          });
      }
    });
  };
  /* Delete Speaker */
  deleteSpeaker = speakerId => {
    return new Promise((resolve, reject) => {
      axios
        .delete(AUTH_REST_BASE_END_POINT + '/api/speaker/' + speakerId)
        .then(response => {
          if (response.data) {
            resolve(response.data);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  /* Get Home Page News */
  getHomePageNews = (
    routeParams = {
      page: 1,
      limit: 20,
      sort: 'updatedAt',
      order: -1
    }
  ) => {
    return new Promise((resolve, reject) => {
      axios
        .get(AUTH_REST_BASE_END_POINT + '/api/news', {
          params: routeParams
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  /* Create or Update News */
  createOrUpdateNews = newsDetail => {
    return new Promise((resolve, reject) => {
      if (newsDetail._id === 'new') {
        /* Create a news */
        axios
          .post(
            AUTH_REST_BASE_END_POINT + '/api/news',
            formurlencoded(newsDetail)
          )
          .then(response => {
            if (response.data) {
              resolve(response.data);
            }
            // else {
            // 	reject(response.data.error);
            // }
          })
          .catch(error => {
            reject(error);
          });
      } else {
        /* Update a news */
        axios
          .post(
            AUTH_REST_BASE_END_POINT + '/api/news/update',
            formurlencoded(newsDetail)
          )
          .then(response => {
            if (response.data) {
              resolve(response.data);
            }
            // else {
            // 	reject(response.data.error);
            // }
          })
          .catch(error => {
            reject(error);
          });
      }
    });
  };
  /* Delete news */
  deleteNews = newsId => {
    return new Promise((resolve, reject) => {
      axios
        .delete(AUTH_REST_BASE_END_POINT + '/api/news/' + newsId)
        .then(response => {
          if (response.data) {
            resolve(response.data);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  /* Get Home Page Information List */
  getHomePageInformation = (
    routeParams = {
      page: 1,
      limit: 20,
      sort: 'updatedAt',
      order: -1
    }
  ) => {
    return new Promise((resolve, reject) => {
      axios
        .get(AUTH_REST_BASE_END_POINT + '/api/information', {
          params: routeParams
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  /* Create or Update Information */
  createOrUpdateInformation = informationDetail => {
    return new Promise((resolve, reject) => {
      if (informationDetail._id === 'new') {
        /* Create a Information */
        axios
          .post(
            AUTH_REST_BASE_END_POINT + '/api/information',
            formurlencoded(informationDetail)
          )
          .then(response => {
            if (response.data) {
              resolve(response.data);
            }
            // else {
            // 	reject(response.data.error);
            // }
          })
          .catch(error => {
            reject(error);
          });
      } else {
        /* Update a Information */
        axios
          .post(
            AUTH_REST_BASE_END_POINT + '/api/information/update',
            formurlencoded(informationDetail)
          )
          .then(response => {
            if (response.data) {
              resolve(response.data);
            }
            // else {
            // 	reject(response.data.error);
            // }
          })
          .catch(error => {
            reject(error);
          });
      }
    });
  };
  /* Delete Information by informationId */
  deleteInformation = informationId => {
    return new Promise((resolve, reject) => {
      axios
        .delete(AUTH_REST_BASE_END_POINT + '/api/information/' + informationId)
        .then(response => {
          if (response.data) {
            resolve(response.data);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  /* Get Home Page Event List */
  getHomePageEvents = (
    routeParams = {
      page: 1,
      limit: 20,
      sort: 'updatedAt',
      order: -1
    }
  ) => {
    return new Promise((resolve, reject) => {
      axios
        .get(AUTH_REST_BASE_END_POINT + '/api/event', {
          params: routeParams
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  /* Create or Update Event */
  createOrUpdateEvent = eventDetail => {
    return new Promise((resolve, reject) => {
      if (eventDetail._id === 'new') {
        /* Create a Event */
        axios
          .post(
            AUTH_REST_BASE_END_POINT + '/api/event',
            formurlencoded(eventDetail)
          )
          .then(response => {
            if (response.data) {
              resolve(response.data);
            }
            // else {
            // 	reject(response.data.error);
            // }
          })
          .catch(error => {
            reject(error);
          });
      } else {
        /* Update a Event */
        axios
          .post(
            AUTH_REST_BASE_END_POINT + '/api/event/update',
            formurlencoded(eventDetail)
          )
          .then(response => {
            if (response.data) {
              resolve(response.data);
            }
            // else {
            // 	reject(response.data.error);
            // }
          })
          .catch(error => {
            reject(error);
          });
      }
    });
  };
  /* Delete Event by eventId */
  deleteEvent = eventId => {
    return new Promise((resolve, reject) => {
      axios
        .delete(AUTH_REST_BASE_END_POINT + '/api/event/' + eventId)
        .then(response => {
          if (response.data) {
            resolve(response.data);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  /* Apply a Event */
  applyEvent = applyDetail => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          AUTH_REST_BASE_END_POINT + '/api/activityLog',
          formurlencoded(applyDetail)
        )
        .then(response => {
          if (response.data) {
            resolve(response.data);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  /* Leave a review */
  updateEventReview = reviewDetail => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          AUTH_REST_BASE_END_POINT + '/api/activityLog/update',
          formurlencoded(reviewDetail)
        )
        .then(response => {
          if (response.data) {
            resolve(response.data);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  /* Update User Profile */
  updateProfile = userDetail => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          AUTH_REST_BASE_END_POINT + '/api/profile/update',
          formurlencoded(userDetail)
        )
        .then(response => {
          if (response.data) {
            resolve(response.data);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  /* Get Public Consulting Appointment logs */
  getPublicConsultingAppointments = (
    routeParams = {
      filter: 'succeeded',
      fields: 'appointmentStatus',
      page: 1,
      limit: 20,
      sort: 'updatedAt',
      order: -1
    }
  ) => {
    return new Promise((resolve, reject) => {
      axios
        .get(AUTH_REST_BASE_END_POINT + '/api/consultingLog/public', {
          params: routeParams
        })
        .then(response => {
          if (response.data) {
            resolve(response.data);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  /* Get Secret Consulting Appointment logs */
  getSecretConsultingAppointments = (
    routeParams = {
      page: 1,
      limit: 20,
      sort: 'updatedAt',
      order: -1
    }
  ) => {
    return new Promise((resolve, reject) => {
      axios
        .get(AUTH_REST_BASE_END_POINT + '/api/consultingLog/secret', {
          params: routeParams
        })
        .then(response => {
          if (response.data) {
            resolve(response.data);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  /* Get Borrow Appointment logs */
  getBorrowAppointments = (
    routeParams = {
      page: 1,
      limit: 20,
      sort: 'updatedAt',
      order: -1
    }
  ) => {
    return new Promise((resolve, reject) => {
      axios
        .get(AUTH_REST_BASE_END_POINT + '/api/borrowLog', {
          params: routeParams
        })
        .then(response => {
          if (response.data) {
            resolve(response.data);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };
  /* Get Guide Appointment logs */
  getGuideAppointments = (
    routeParams = {
      page: 1,
      limit: 20,
      sort: 'updatedAt',
      order: -1
    }
  ) => {
    return new Promise((resolve, reject) => {
      axios
        .get(AUTH_REST_BASE_END_POINT + '/api/guideLog', {
          params: routeParams
        })
        .then(response => {
          if (response.data) {
            resolve(response.data);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  /* Auth resend verify email */
  resendVerifyEmail = () => {
    return new Promise((resolve, reject) => {
      axios
        .post(AUTH_REST_BASE_END_POINT + '/auth/resend-verify')
        .then(response => {
          if (response.data) {
            resolve(response.data);
          }
          // else {
          // 	reject(response.data.error);
          // }
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  getAccessToken = () => {
    return window.localStorage.getItem('jwt_access_token');
  };
}

const eventBusInstance = new eventBusService();

export default eventBusInstance;
