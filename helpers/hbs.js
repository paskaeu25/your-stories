const moment = require('moment');

module.exports = {
  formatDate: function (date, format) {
    return moment(date).format(format);
  },
  truncate: function (str, len) {
    if (str.length > len && str.length > 0) {
      let new_str = str + ' ';
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(' '));
      new_str = new_str.length > 0 ? new_str : str.substr(0, len);
      return new_str + '...';
    }
    return str;
  },
  stripTags: function (input) {
    return input.replace(/<(?:.|\n)*?>/gm, '');
  },

  editIcon: function (storyUser, loggedUser, storyId, floating = true) {
    if (storyUser._id.toString() == loggedUser.id.toString()) {
      if (floating) {
        return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`;
      } else {
        return `<a href="/stories/edit/${storyId}"><i class="fas fa-edit"></i></a>`;
      }
    } else {
      return '';
    }
  },

  // Update the statusOptions helper in helpers/hbs.js
  statusOptions: function (selectedStatus) {
    const statuses = ['public', 'private'];
    return statuses
      .map((status) => {
        const isSelected = status === selectedStatus;
        const optionValue = status.charAt(0).toUpperCase() + status.slice(1); // Capitalize the first letter
        return `<option value='${status}' ${
          isSelected ? 'selected' : ''
        }>${optionValue}</option>`;
      })
      .join('');
  },
};
