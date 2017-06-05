# Current Twig data and listItem caveats

Currently there seems to be a rather limited amount of information regarding PL twig listItems.json usage.
On the PatterLab page, all the examples are in Mustache, and that seems rather calculated, as it seems that
the Twig implementation is at least limited.

Trying to reference JSON data in a list to embed into the iterated include doesn't seem to work. 
Different approaches lead to always using the attributes from data.json, or everything comes up empty.

The best I have been able to come up with so far is as seen in all Organisms/Full-sections/All Articles List,
where I created a custom all-articles-list.json which contains data attributes to be consumed in a for loop.

Instead of doing something along the lines of documentation where I nest the data structure from data.json inside
a list, I actually removed a layer, so that there is no 'text' outer attribute. I also had to change the name of the 
param from 'all_articles' as used in data.json, to 'all_articles_local', to force it to read from the localised json file.

When iterating over the all_articles_local array, by naming the child as 'text' it was then accessible to the included
pattern, as if it was coming from text.xxxxxxx

```twig
{% for text in all_articles_local %}
  <div class="all-article-list__item">
    {% include "molecules-news-teaser" %}
  </div>
{% endfor %}
```

This is so far the only way I have found to make the lists have some form of functionality.
Also, further nested content as is the case of the date atom inside the news teaser, do not seem to receive any data.
