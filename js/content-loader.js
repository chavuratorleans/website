// Content Loader for Chavurat Or'Leans website
// Loads YAML content files and populates DOM elements.
//
// Usage in HTML:
//   Simple text:  <span data-content="welcome_heading"></span>
//   Nested value:  <span data-content="values.0.title"></span>
//   Array repeat:  <div data-repeat="values" style="display:none">
//                    <h3 data-field="title"></h3>
//                    <p data-field="text"></p>
//                  </div>
//   href binding:  <a data-href="tax_link">Donate</a>
//   iframe src:    <iframe data-src="form_url"></iframe>

async function loadContent(yamlPath) {
  const response = await fetch(yamlPath);
  if (!response.ok) {
    console.warn('Failed to load content:', yamlPath, response.status);
    return {};
  }
  const text = await response.text();
  return jsyaml.load(text) || {};
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => {
    if (current == null) return null;
    return current[key];
  }, obj);
}

function populatePage(data) {
  // Simple text content
  document.querySelectorAll('[data-content]').forEach(el => {
    const value = getNestedValue(data, el.dataset.content);
    if (value != null) {
      el.innerHTML = value;
    }
  });

  // Href binding
  document.querySelectorAll('[data-href]').forEach(el => {
    const value = getNestedValue(data, el.dataset.href);
    if (value != null) {
      el.href = value;
    }
  });

  // Src binding for iframes
  document.querySelectorAll('[data-src]').forEach(el => {
    const value = getNestedValue(data, el.dataset.src);
    if (value != null) {
      el.src = value;
    }
  });

  // Repeat templates for arrays
  document.querySelectorAll('[data-repeat]').forEach(template => {
    const arrayPath = template.dataset.repeat;
    const items = getNestedValue(data, arrayPath);
    if (!Array.isArray(items)) return;

    const parent = template.parentElement;
    items.forEach((item, index) => {
      const clone = template.cloneNode(true);
      clone.removeAttribute('data-repeat');
      clone.style.display = '';

      // Populate fields
      clone.querySelectorAll('[data-field]').forEach(el => {
        const value = typeof item === 'string' ? item : item[el.dataset.field];
        if (value != null) el.innerHTML = value;
      });

      // If item is a plain string (e.g. schedule_items), set the clone's text
      if (typeof item === 'string') {
        const textEl = clone.querySelector('[data-field]') || clone;
        textEl.innerHTML = item;
      }

      parent.appendChild(clone);
    });
    template.remove();
  });
}

async function initContent(...yamlPaths) {
  try {
    const allData = {};
    for (const path of yamlPaths) {
      const data = await loadContent(path);
      Object.assign(allData, data);
    }
    populatePage(allData);
  } catch (err) {
    console.error('Content loading error:', err);
  }
  // Remove loading state, show content
  document.body.classList.add('content-loaded');
}
