angular.module('openshiftConsoleTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/_alerts.html',
    "<div ng-attr-row=\"{{toast}}\" ng-attr-wrap=\"{{toast}}\">\n" +
    "<div ng-repeat=\"alert in (alerts | filterCollection : filter)\" ng-if=\"!alert.hidden\" class=\"alert-wrapper\">\n" +
    "<div class=\"alert\" ng-class=\"{\n" +
    "      'alert-danger': alert.type === 'error',\n" +
    "      'alert-warning': alert.type === 'warning',\n" +
    "      'alert-success': alert.type === 'success',\n" +
    "      'alert-info': !alert.type || alert.type === 'info',\n" +
    "      'toast-pf': toast,\n" +
    "      'mar-left-sm': toast\n" +
    "    }\">\n" +
    "<button ng-if=\"!hideCloseButton\" ng-click=\"close(alert)\" type=\"button\" class=\"close\">\n" +
    "<span class=\"pficon pficon-close\" aria-hidden=\"true\"></span>\n" +
    "<span class=\"sr-only\">Close</span>\n" +
    "</button>\n" +
    "<span class=\"pficon\" aria-hidden=\"true\" ng-class=\"{\n" +
    "        'pficon-error-circle-o': alert.type === 'error',\n" +
    "        'pficon-warning-triangle-o': alert.type === 'warning',\n" +
    "        'pficon-ok': alert.type === 'success',\n" +
    "        'pficon-info': !alert.type || alert.type === 'info'\n" +
    "      }\"></span>\n" +
    "<span class=\"sr-only\">{{alert.type}}</span>\n" +
    "<span ng-if=\"alert.message\" style=\"margin-right: 5px\" ng-class=\"{'strong': !toast}\">{{alert.message}}</span><span ng-if=\"alert.details\">{{alert.details}}</span>\n" +
    "<span ng-repeat=\"link in alert.links\">\n" +
    "<a ng-if=\"!link.href\" href=\"\" ng-click=\"onClick(alert, link)\" role=\"button\">{{link.label}}</a>\n" +
    "<a ng-if=\"link.href\" href=\"{{link.href}}\" ng-click=\"onClick(alert, link)\">{{link.label}}</a>\n" +
    "<span ng-if=\"!$last\" class=\"action-divider\">|</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/_build-trends-chart.html',
    " <div class=\"build-trends-responsive\" aria-hidden=\"true\" ng-show=\"completeBuilds.length >= minBuilds()\">\n" +
    "<div class=\"build-trends-container\">\n" +
    "\n" +
    "<div ng-attr-id=\"{{chartID}}\" class=\"build-trends-chart\"></div>\n" +
    "\n" +
    "<div ng-if=\"averageDurationText\" class=\"avg-duration pull-right\">\n" +
    "<a href=\"\" ng-click=\"toggleAvgLine()\" title=\"Toggle average line\" role=\"button\" class=\"action-button\">\n" +
    "<span class=\"avg-duration-text text-muted\">\n" +
    "<svg width=\"25\" height=\"20\">\n" +
    "<line class=\"build-trends-avg-line\" x1=\"0\" y1=\"10\" x2=\"25\" y2=\"10\"/>\n" +
    "</svg>\n" +
    "<span style=\"vertical-align: top\">Average: {{averageDurationText}}</span>\n" +
    "</span>\n" +
    "</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"completeBuilds.length < minBuilds()\" class=\"gutter-bottom\"></div>\n" +
    "<div ng-if=\"averageDurationText\" class=\"sr-only\">\n" +
    "Average build duration {{averageDurationText}}\n" +
    "</div>"
  );


  $templateCache.put('views/_compute-resource.html',
    "<ng-form name=\"form\">\n" +
    "<fieldset class=\"form-inline compute-resource\">\n" +
    "<label ng-if=\"label\">{{label}}</label>\n" +
    "<div ng-class=\"{ 'has-error': form.$invalid }\">\n" +
    "<label class=\"sr-only\" ng-attr-for=\"{{id}}\">Amount</label>\n" +
    "<input type=\"number\" name=\"amount\" ng-attr-id=\"{{id}}\" ng-model=\"amount\" min=\"0\" ng-attr-placeholder=\"{{placeholder}}\" class=\"form-control\" ng-attr-aria-describedby=\"{{description ? id + '-help' : undefined}}\">\n" +
    "<label class=\"sr-only\" ng-attr-for=\"{{id}}-unit\">Unit</label>\n" +
    "<select ng-model=\"unit\" ng-options=\"option.value as option.label for option in units\" ng-attr-id=\"{{id}}-unit\" class=\"form-control inline-select\">\n" +
    "</select>\n" +
    "</div>\n" +
    "<div ng-if=\"description\" class=\"help-block\" ng-attr-id=\"{{id}}-help\">\n" +
    "{{description}}\n" +
    "</div>\n" +
    "<div ng-if=\"form.$invalid\" class=\"has-error\">\n" +
    "<div ng-if=\"form.amount.$error.number\" class=\"help-block\">\n" +
    "Must be a number.\n" +
    "</div>\n" +
    "<div ng-if=\"form.amount.$error.min\" class=\"help-block\">\n" +
    "Can't be negative.\n" +
    "</div>\n" +
    "<div ng-if=\"form.amount.$error.limitRangeMin\" class=\"help-block\">\n" +
    "Can't be less than {{limitRangeMin | usageWithUnits : type}}.\n" +
    "</div>\n" +
    "<div ng-if=\"form.amount.$error.limitRangeMax\" class=\"help-block\">\n" +
    "Can't be greater than {{limitRangeMax | usageWithUnits : type}}.\n" +
    "</div>\n" +
    "<div ng-if=\"form.amount.$error.limitLargerThanRequest\" class=\"help-block\">\n" +
    "Limit can't be less than request ({{request | usageWithUnits : type}}).\n" +
    "</div>\n" +
    "<div ng-if=\"form.amount.$error.limitWithinRatio\" class=\"help-block\">\n" +
    "<span ng-if=\"!amount && !defaultValue\">\n" +
    "Limit is required if request is set. (Max Limit/Request Ratio: {{maxLimitRequestRatio}})\n" +
    "</span>\n" +
    "<span ng-if=\"amount || defaultValue\">\n" +
    "Limit cannot be more than {{maxLimitRequestRatio}} times request value. (Request: {{request | usageWithUnits : type}},\n" +
    "\n" +
    "Limit: {{(amount ? (amount + unit) : defaultValue) | usageWithUnits : type}})\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "</ng-form>"
  );


  $templateCache.put('views/_deployment-config-metadata.html',
    "<div ng-if=\"deploymentConfigId != ''\" class=\"metadata\">\n" +
    "<span>Created from deployment config {{deploymentConfigId}}</span>\n" +
    "<span ng-if=\"!exists\" data-toggle=\"tooltip\" title=\"Deployment config no longer exists\" class=\"pficon pficon-error-circle-o\" style=\"cursor: help\"></span>\n" +
    "<span ng-if=\"exists && differentService\" data-toggle=\"tooltip\" title=\"The template for this deployment config has changed. New deployments will not be included in this list.\" class=\"pficon pficon-error-circle-o\" style=\"cursor: help\"></span>\n" +
    "</div>"
  );


  $templateCache.put('views/_edit-request-limit.html',
    "<ng-form name=\"form\" ng-if=\"!requestCalculated || !limitCalculated\">\n" +
    "<h3>\n" +
    "{{type | computeResourceLabel : true}}\n" +
    "<small ng-if=\"limits.min && limits.max\">\n" +
    "{{limits.min | usageWithUnits : type}} min to {{limits.max | usageWithUnits : type}} max\n" +
    "</small>\n" +
    "<small ng-if=\"limits.min && !limits.max\">\n" +
    "Min: {{limits.min | usageWithUnits : type}}\n" +
    "</small>\n" +
    "<small ng-if=\"limits.max && !limits.min\">\n" +
    "Max: {{limits.max | usageWithUnits : type}}\n" +
    "</small>\n" +
    "</h3>\n" +
    "\n" +
    "<compute-resource ng-model=\"resources.requests[type]\" type=\"{{type}}\" label=\"Request\" description=\"The amount of {{type | computeResourceLabel}} the container requests.\" default-value=\"limits.defaultRequest\" limit-range-min=\"limits.min\" limit-range-max=\"limits.max\" max-limit-request-ratio=\"limits.maxLimitRequestRatio\" ng-if=\"!requestCalculated\">\n" +
    "</compute-resource>\n" +
    "\n" +
    "<compute-resource ng-model=\"resources.limits[type]\" type=\"{{type}}\" label=\"{{requestCalculated ? undefined : 'Limit'}}\" description=\"The amount of {{type | computeResourceLabel : true}} the container is limited to use.\" default-value=\"limits.defaultLimit\" limit-range-min=\"limits.min\" limit-range-max=\"limits.max\" request=\"requestCalculated ? undefined : resources.requests[type]\" max-limit-request-ratio=\"limits.maxLimitRequestRatio\" ng-if=\"!hideLimit\">\n" +
    "</compute-resource>\n" +
    "</ng-form>"
  );


  $templateCache.put('views/_overview-deployment.html',
    " <div class=\"osc-object components-panel deployment-block\" kind=\"ReplicationController\" resource=\"rc\" ng-init=\"hasDeploymentConfig = (deploymentConfigId && (rc | annotation:'deploymentConfig') && (rc | annotation:'deploymentVersion'))\">\n" +
    "\n" +
    "<div class=\"connector\">\n" +
    "<i class=\"fa fa-search\"></i>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"component-block component-meta\" ng-if=\"hasDeploymentConfig\">\n" +
    "<div class=\"component\">\n" +
    "<div class=\"component-label\">\n" +
    "<span>Deployment: </span>\n" +
    "<span class=\"nowrap\">\n" +
    "<a class=\"subtle-link\" ng-href=\"{{deploymentConfigId | navigateResourceURL : 'DeploymentConfig' : rc.metadata.namespace}}\">{{deploymentConfigId}}</a>,\n" +
    "<a class=\"subtle-link\" ng-href=\"{{rc | navigateResourceURL}}\">#{{rc | annotation:'deploymentVersion'}}</a>\n" +
    "</span>\n" +
    "<span ng-if=\"deploymentConfigMissing\" data-toggle=\"tooltip\" title=\"The deployment config this deployment was created from no longer exists.\" class=\"pficon pficon-warning-triangle-o\" style=\"cursor: help\"></span>\n" +
    "<span ng-if=\"deploymentConfigDifferentService\" data-toggle=\"tooltip\" title=\"The deployment config this deployment was created from has changed. New deployments will not be included in this list.\" class=\"pficon pficon-warning-triangle-o\" style=\"cursor: help\"></span>\n" +
    "\n" +
    "<span ng-if=\"rc | deploymentIsInProgress\">&mdash; <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> In progress</span>\n" +
    "<span ng-switch=\"rc | deploymentStatus\" class=\"hide-ng-leave\">\n" +
    "<span ng-switch-when=\"Cancelled\">&mdash; <span class=\"text-warning\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Cancelled</span></span>\n" +
    "<span ng-switch-when=\"Failed\">&mdash; <span class=\"text-danger\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Failed</span></span>\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"component meta-data\">\n" +
    "<relative-timestamp timestamp=\"rc.metadata.creationTimestamp\"></relative-timestamp><span ng-if=\"rc.causes.length\"><span>\n" +
    "<span class=\"deployment-trigger\" ng-repeat=\"cause in rc.causes\">\n" +
    "<span ng-switch=\"cause.type\">\n" +
    "<span ng-switch-when=\"ImageChange\">\n" +
    "<span ng-if=\"cause.imageTrigger.from\">\n" +
    "from <abbr title=\"{{cause.imageTrigger.from | imageObjectRef : null : true}}\">image</abbr> change\n" +
    "</span>\n" +
    "</span>\n" +
    "<span ng-switch-when=\"ConfigChange\">from config change</span>\n" +
    "<span ng-switch-default>{{cause.type}}</span>\n" +
    "</span>\n" +
    "</span>\n" +
    "</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"component-block component-meta\" ng-if=\"!hasDeploymentConfig\">\n" +
    "<div class=\"component\">\n" +
    "<div class=\"component-label\">\n" +
    "Replication Controller:\n" +
    "<a class=\"subtle-link nowrap\" ng-href=\"{{rc | navigateResourceURL}}\">{{rc.metadata.name}}</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"component meta-data\">\n" +
    "created <relative-timestamp timestamp=\"rc.metadata.creationTimestamp\"></relative-timestamp>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div row mobile=\"column\" axis=\"center center\" class=\"pod-block\">\n" +
    "<div column class=\"deployment-pods\" axis=\"center center\">\n" +
    "<deployment-donut rc=\"rc\" deployment-config=\"deploymentConfig\" pods=\"pods\" hpa=\"hpa\" limit-ragnes=\"limitRanges\" scalable=\"scalable\" alerts=\"alerts\">\n" +
    "</deployment-donut>\n" +
    "</div>\n" +
    "\n" +
    "<div column grow=\"2\" class=\"pod-template-column\">\n" +
    "\n" +
    "<div flex></div>\n" +
    "<pod-template pod-template=\"rc.spec.template\" images-by-docker-reference=\"imagesByDockerReference\" builds=\"builds\">\n" +
    "</pod-template>\n" +
    "\n" +
    "<div flex></div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/_overview-monopod.html',
    " <div class=\"tile-container components-panel deployment-block osc-object\" kind=\"Pod\" resource=\"pod\">\n" +
    "<div class=\"connector\">\n" +
    "<i class=\"fa fa-search\"></i>\n" +
    "</div>\n" +
    "<div class=\"component-block component-meta\">\n" +
    "<div class=\"component\">\n" +
    "<span class=\"component-label\">Pod: {{pod.metadata.name}}</span>\n" +
    "</div>\n" +
    "<div class=\"component meta-data\">\n" +
    "created <relative-timestamp timestamp=\"pod.metadata.creationTimestamp\"></relative-timestamp>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div row mobile=\"column\" axis=\"center center\" class=\"pod-block\">\n" +
    "<div row>\n" +
    "\n" +
    "<div flex class=\"visible-xs-block\"></div>\n" +
    "<div column class=\"overview-pods\">\n" +
    "<div column>\n" +
    "<pod-donut pods=\"[pod]\" ng-click=\"viewPod()\"></pod-donut>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div flex class=\"visible-xs-block\"></div>\n" +
    "</div>\n" +
    "<div column grow=\"2\">\n" +
    "\n" +
    "<div flex></div>\n" +
    "<pod-template pod-template=\"pod\"></pod-template>\n" +
    "\n" +
    "<div flex></div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/_parse-error.html',
    "<div ng-show=\"error && !hidden\" class=\"alert alert-danger\">\n" +
    "<button ng-click=\"hidden = true\" type=\"button\" class=\"close\" aria-hidden=\"true\">\n" +
    "<span class=\"pficon pficon-close\"></span>\n" +
    "</button>\n" +
    "<span class=\"pficon pficon-error-circle-o\"></span>\n" +
    "<strong>Failed to process the resource.</strong>\n" +
    "<div class=\"pre-wrap\" ng-if=\"error.message\">{{error.message}}</div>\n" +
    "</div>"
  );


  $templateCache.put('views/_pod-template.html',
    " <div ng-if=\"detailed && addHealthCheckUrl && !(podTemplate | hasHealthChecks)\" class=\"alert alert-info\">\n" +
    "<span class=\"pficon pficon-info\" aria-hidden=\"true\"></span>\n" +
    "<span ng-if=\"podTemplate.spec.containers.length === 1\">This container has no health checks</span>\n" +
    "<span ng-if=\"podTemplate.spec.containers.length > 1\">Not all containers have health checks</span>\n" +
    "to ensure your application is running correctly.\n" +
    "<a ng-href=\"{{addHealthCheckUrl}}\" class=\"nowrap\">Add health checks</a>\n" +
    "</div>\n" +
    "<div class=\"pod-template-container\">\n" +
    "<div class=\"pod-template-block\" ng-repeat=\"container in podTemplate.spec.containers\">\n" +
    "<div class=\"pod-template\">\n" +
    "<div class=\"component-label\">Container: {{container.name}}</div>\n" +
    "<div row ng-if=\"container.image\" class=\"pod-template-image icon-row\">\n" +
    "<div>\n" +
    "<span class=\"pficon pficon-image\" aria-hidden=\"true\"></span>\n" +
    "</div>\n" +
    "<div flex class=\"word-break\">\n" +
    "<span class=\"pod-template-key\">Image:</span>\n" +
    "<span ng-if=\"!imagesByDockerReference[container.image]\">{{container.image | imageStreamName}}</span>\n" +
    "<span ng-if=\"imagesByDockerReference[container.image]\">\n" +
    "<a ng-href=\"{{imagesByDockerReference[container.image].imageStreamName | navigateResourceURL : 'ImageStream' : imagesByDockerReference[container.image].imageStreamNamespace}}\">{{container.image | imageStreamName}}</a>\n" +
    "<span class=\"hash\" title=\"{{imagesByDockerReference[container.image].metadata.name}}\">{{imagesByDockerReference[container.image].metadata.name | stripSHAPrefix | limitTo: 7}}</span>\n" +
    "<span ng-if=\"imagesByDockerReference[container.image].dockerImageMetadata.Size\" class=\"small text-muted nowrap\">\n" +
    "{{imagesByDockerReference[container.image].dockerImageMetadata.Size | humanizeSize}}\n" +
    "</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"imagesByDockerReference && container.image && (image = imagesByDockerReference[container.image])\" class=\"pod-template-build\">\n" +
    "<div row class=\"icon-row\" ng-if=\"build = (image | buildForImage : builds)\">\n" +
    "<div>\n" +
    "<span class=\"fa fa-refresh\" aria-hidden=\"true\"></span>\n" +
    "</div>\n" +
    "<div flex class=\"word-break\">\n" +
    "<span class=\"pod-template-key\">Build:</span>\n" +
    "<span ng-if=\"build | configURLForResource\">\n" +
    "<a ng-href=\"{{build | configURLForResource}}\">{{build | buildConfigForBuild}}</a>,\n" +
    "</span>\n" +
    "<a ng-href=\"{{build | navigateResourceURL}}\">\n" +
    "<span ng-if=\"(build | annotation : 'buildNumber')\">#{{build | annotation : 'buildNumber'}}</span>\n" +
    "<span ng-if=\"!(build | annotation : 'buildNumber')\">{{build.metadata.name}}</span>\n" +
    "</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div row class=\"icon-row\" ng-if=\"build.spec.source\">\n" +
    "<div>\n" +
    "<span class=\"fa fa-code\" aria-hidden=\"true\"></span>\n" +
    "</div>\n" +
    "<div flex>\n" +
    "<span class=\"pod-template-key\">Source:</span>\n" +
    "<span ng-switch=\"build.spec.source.type\">\n" +
    "<span ng-switch-when=\"Git\">\n" +
    "<span ng-if=\"build.spec.revision.git.commit\">\n" +
    "{{build.spec.revision.git.message}}\n" +
    "<osc-git-link class=\"hash\" uri=\"build.spec.source.git.uri\" ref=\"build.spec.revision.git.commit\">{{build.spec.revision.git.commit | limitTo:7}}</osc-git-link>\n" +
    "<span ng-if=\"detailed && build.spec.revision.git.author\">\n" +
    "authored by {{build.spec.revision.git.author.name}}\n" +
    "</span>\n" +
    "</span>\n" +
    "<span ng-if=\"!build.spec.revision.git.commit\">\n" +
    "<osc-git-link uri=\"build.spec.source.git.uri\">{{build.spec.source.git.uri}}</osc-git-link>\n" +
    "</span>\n" +
    "</span>\n" +
    "<span ng-switch-default>\n" +
    "{{build.spec.source.type || 'Unknown'}}\n" +
    "</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div row ng-if=\"container.ports.length > 0\" class=\"pod-template-ports icon-row\">\n" +
    "<div>\n" +
    "<span data-icon=\"\" aria-hidden=\"true\" style=\"font-size:16px;line-height:normal\"></span>\n" +
    "</div>\n" +
    "<div flex class=\"word-break\">\n" +
    "<span class=\"pod-template-key\">Ports:</span>\n" +
    "<span ng-repeat=\"port in container.ports | orderBy: 'containerPort'\">\n" +
    "<span><span class=\"nowrap\">{{port.containerPort}}/{{port.protocol}}</span>\n" +
    "<span ng-if=\"port.name\"> <span class=\"nowrap\">({{port.name}})</span></span>\n" +
    "<span ng-if=\"port.hostPort\"> <span class=\"nowrap\"><span class=\"port-icon\">&#8594;</span> {{port.hostPort}}</span></span>\n" +
    "</span>\n" +
    "<span ng-if=\"!$last\">, </span>\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div row ng-if=\"detailed\" ng-repeat=\"mount in container.volumeMounts\" class=\"icon-row\">\n" +
    "<div>\n" +
    "<span aria-hidden=\"true\" class=\"fa fa-database\"></span>\n" +
    "</div>\n" +
    "<div flex class=\"word-break\">\n" +
    "<span class=\"pod-template-key\">Mount:</span>\n" +
    "<span>\n" +
    "{{mount.name}}&#8201;&#8594;&#8201;<span>{{mount.mountPath}}</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div row ng-if=\"detailed && (container.resources.requests.cpu || container.resources.limits.cpu)\" class=\"icon-row\">\n" +
    "<div>\n" +
    "<i class=\"fa fa-area-chart\" aria-hidden=\"true\"></i>\n" +
    "</div>\n" +
    "<div flex>\n" +
    "<span class=\"pod-template-key\">CPU:</span>\n" +
    "<span ng-if=\"container.resources.requests.cpu && container.resources.limits.cpu\">\n" +
    "{{container.resources.requests.cpu | usageWithUnits: 'cpu'}} to {{container.resources.limits.cpu | usageWithUnits: 'cpu'}}\n" +
    "</span>\n" +
    "<span ng-if=\"!container.resources.requests.cpu\">\n" +
    "{{container.resources.limits.cpu | usageWithUnits: 'cpu'}} limit\n" +
    "</span>\n" +
    "<span ng-if=\"!container.resources.limits.cpu\">\n" +
    "{{container.resources.requests.cpu | usageWithUnits: 'cpu'}} requested\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div row ng-if=\"detailed && (container.resources.requests.memory || container.resources.limits.memory)\" class=\"icon-row\">\n" +
    "<div>\n" +
    "<i class=\"fa fa-area-chart\" aria-hidden=\"true\"></i>\n" +
    "</div>\n" +
    "<div flex>\n" +
    "<span class=\"pod-template-key\">Memory:</span>\n" +
    "<span ng-if=\"container.resources.requests.memory && container.resources.limits.memory\">\n" +
    "{{container.resources.requests.memory | usageWithUnits: 'memory'}} to {{container.resources.limits.memory | usageWithUnits: 'memory'}}\n" +
    "</span>\n" +
    "<span ng-if=\"!container.resources.requests.memory\">\n" +
    "{{container.resources.limits.memory | usageWithUnits: 'memory'}} limit\n" +
    "</span>\n" +
    "<span ng-if=\"!container.resources.limits.memory\">\n" +
    "{{container.resources.requests.memory | usageWithUnits: 'memory'}} requested\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div row ng-if=\"detailed && container.readinessProbe\" class=\"icon-row\">\n" +
    "<div>\n" +
    "<i class=\"fa fa-medkit\" aria-hidden=\"true\"></i>\n" +
    "</div>\n" +
    "<div flex>\n" +
    "<span class=\"pod-template-key\">Readiness Probe:</span>\n" +
    "<probe probe=\"container.readinessProbe\"></probe>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div row ng-if=\"detailed && container.livenessProbe\" class=\"icon-row\">\n" +
    "<div>\n" +
    "<i class=\"fa fa-medkit\" aria-hidden=\"true\"></i>\n" +
    "</div>\n" +
    "<div flex>\n" +
    "<span class=\"pod-template-key\">Liveness Probe:</span>\n" +
    "<probe probe=\"container.livenessProbe\"></probe>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div extension-point extension-name=\"container-links\" extension-types=\"link dom\" extension-args=\"[container, podTemplate]\"></div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/_pods.html',
    " <div class=\"component-block\" ng-if=\"(pods | hashSize) > 3\">\n" +
    "<div class=\"pod-container\">\n" +
    "<div class=\"pod pod-{{phase.toLowerCase()}} pod-multiple osc-object osc-object-stacked\" ng-repeat-start=\"phase in phases\" ng-if=\"(phasePods = (pods | podsForPhase : phase)).length && (troublePods = (phasePods | troubledPods)) && (expandedPhase != phase || warningsExpanded) && (phasePods.length - troublePods.length > 0)\" ng-click=\"expandPhase(phase, false, $event)\" title=\"Expand to see individual pods\">\n" +
    "<div style=\"font-size:24px; line-height: 19px\">\n" +
    "<span>{{phasePods.length - troublePods.length}}</span>\n" +
    "</div>\n" +
    "<div class=\"pod-text\">{{phase}}</div>\n" +
    "<i class=\"fa fa-ellipsis-h\"></i>\n" +
    "</div>\n" +
    "<div class=\"pod pod-warning pod-multiple osc-object osc-object-stacked\" ng-repeat-end ng-if=\"(expandedPhase != phase || !warningsExpanded) && (phasePods = (pods | podsForPhase : phase)).length && (troublePods = (phasePods | troubledPods)).length\" ng-click=\"expandPhase(phase, true, $event)\" title=\"Expand to see individual pods\">\n" +
    "<div style=\"font-size:24px; line-height: 19px\">\n" +
    "<span>{{troublePods.length}}</span>\n" +
    "<span ng-if=\"troublePods.length\" data-content=\"These pods are having problems, view a pod to see more details.\" class=\"pficon pficon-warning-triangle-o\" style=\"font-size: 14px; margin-right: -24px\" data-toggle=\"popover\" data-trigger=\"hover\"></span>\n" +
    "</div>\n" +
    "<div class=\"pod-text\">{{phase}}</div>\n" +
    "<i class=\"fa fa-ellipsis-h\"></i>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"component-block\" ng-if=\"(pods | hashSize) > 3\">\n" +
    "<div ng-if=\"expandedPhase\">\n" +
    "<div ng-if=\"!warningsExpanded\">\n" +
    "<div class=\"pod-container\">\n" +
    "<div class=\"pod pod-{{pod.status.phase.toLowerCase()}} osc-object\" ng-repeat=\"pod in (phasePods = (pods | podsForPhase : expandedPhase | notTroubledPods)) | limitTo : 3 track by (pod | uid)\" kind=\"Pod\" resource=\"pod\">\n" +
    "<pod-content pod=\"pod\" troubled=\"false\"></pod-content>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"pull-right small\" style=\"margin-top: -7px\" ng-if=\"(phasePods = (pods | podsForPhase : expandedPhase | notTroubledPods)).length > 0\">\n" +
    "<span ng-if=\"phasePods.length > 3\" style=\"margin-right: 5px; color: #999\">... and {{phasePods.length - 3}} more</span>\n" +
    "<a href=\"javascript:;\" ng-click=\"expandPhase(null)\" style=\"margin-top: -10px\">Collapse</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"warningsExpanded\">\n" +
    "<div class=\"pod-container\">\n" +
    "<div class=\"pod pod-warning osc-object\" ng-repeat=\"pod in (phasePods = (pods | podsForPhase : expandedPhase | troubledPods)) | limitTo : 3 track by (pod | uid)\" kind=\"Pod\" resource=\"pod\">\n" +
    "<pod-content pod=\"pod\" troubled=\"true\"></pod-content>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"pull-right small\" style=\"margin-top: -7px\" ng-if=\"(phasePods = (pods | podsForPhase : expandedPhase | troubledPods)).length > 0\">\n" +
    "<span ng-if=\"phasePods.length > 3\" style=\"margin-right: 5px; color: #999\">... and {{phasePods.length - 3}} more</span>\n" +
    "<a href=\"javascript:;\" ng-click=\"expandPhase(null)\" style=\"margin-top: -10px\">Collapse</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"component-block\" ng-if=\"(pods | hashSize) <= 3\">\n" +
    "<div class=\"pod-container\">\n" +
    "<div class=\"animate-repeat pod osc-object\" ng-repeat=\"pod in pods track by (pod | uid)\" kind=\"Pod\" resource=\"pod\" ng-class=\"(isTroubled = (pod | isTroubledPod)) ? 'pod-warning' : ('pod-' + pod.status.phase.toLowerCase())\">\n" +
    "<pod-content pod=\"pod\" troubled=\"isTroubled\"></pod-content>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/_project-page.html',
    "<div ng-class=\"{'show-sidebar-right': renderOptions.showEventsSidebar}\" class=\"wrap\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-1\">\n" +
    "<sidebar></sidebar>\n" +
    "</div>\n" +
    "<div id=\"container-main\" class=\"middle\">\n" +
    "<div ng-transclude>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"renderOptions.showEventsSidebar && !renderOptions.collapseEventsSidebar\" class=\"sidebar-right sidebar-pf sidebar-pf-right\">\n" +
    "<div class=\"right-section\">\n" +
    "<events-sidebar ng-if=\"projectContext\" project-context=\"projectContext\" collapsed=\"renderOptions.collapseEventsSidebar\"></events-sidebar>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/_quota-usage-chart.html',
    "<div ng-attr-id=\"{{chartID}}\" ng-style=\"{ width: width + 'px', height: height + 'px' }\" aria-hidden=\"true\">\n" +
    "</div>"
  );


  $templateCache.put('views/_request-access.html',
    "<p class=\"gutter-top\">\n" +
    "If you need to create resources in this project, a project administrator can grant you additional access by running this command:\n" +
    "</p>\n" +
    "<code>oc policy add-role-to-user &lt;role&gt; {{user.metadata.name}} -n {{projectName}}</code>"
  );


  $templateCache.put('views/_settings-general-info.html',
    "<h3>General information</h3>\n" +
    "<div column ng-if=\"!show.editing\">\n" +
    "<div row mobile=\"column\">\n" +
    "<div flex class=\"settings-item\">\n" +
    "<strong>Name:</strong>\n" +
    "</div>\n" +
    "<div flex grow=\"4\" class=\"project-name settings-item\">\n" +
    "{{projectName}}\n" +
    "</div>\n" +
    "</div>\n" +
    "<div row mobile=\"column\">\n" +
    "<div flex class=\"settings-item\">\n" +
    "<strong>Display Name:</strong>\n" +
    "</div>\n" +
    "<div row flex grow=\"4\" class=\"settings-item\">\n" +
    "<div class=\"project-display-name\" ng-if=\"project | displayName: true\">\n" +
    "{{project | displayName: true}}\n" +
    "</div>\n" +
    "<div class=\"project-display-name no-display-name\" ng-if=\"!(project | displayName: true)\">\n" +
    "<em>No display name</em>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div row mobile=\"column\">\n" +
    "<div flex class=\"settings-item\"><strong>Description:</strong></div>\n" +
    "<div row flex grow=\"4\" class=\"settings-item\">\n" +
    "<div ng-if=\"project | description\">\n" +
    "<truncate-long-text class=\"project-description\" content=\"project | description\" limit=\"1024\" use-word-boundary=\"true\"></truncate-long-text>\n" +
    "</div>\n" +
    "<div ng-if=\"!(project | description)\">\n" +
    "<em>No description</em>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<form name=\"editForm\" novalidate ng-if=\"show.editing\">\n" +
    "<div row mobile=\"column\">\n" +
    "<div flex class=\"settings-item\">\n" +
    "<label>\n" +
    "<strong>Name:</strong>\n" +
    "</label>\n" +
    "</div>\n" +
    "<div flex grow=\"4\" class=\"settings-item\">{{projectName}}</div>\n" +
    "</div>\n" +
    "<div row mobile=\"column\">\n" +
    "<div flex class=\"settings-item\">\n" +
    "<label for=\"settings_display_name\">\n" +
    "<strong>Display Name:</strong>\n" +
    "</label>\n" +
    "</div>\n" +
    "<div flex grow=\"2\">\n" +
    "<input id=\"settings_display_name\" class=\"form-control\" type=\"text\" name=\"settings_display_name\" placeholder=\"project display name\" ng-model=\"editableFields.displayName\">\n" +
    "</div>\n" +
    "<div flex grow=\"2\"></div>\n" +
    "</div>\n" +
    "<div row mobile=\"column\" class=\"form-group\">\n" +
    "<div flex class=\"settings-item\">\n" +
    "<label for=\"settings_description\">\n" +
    "<strong>Description: </strong>\n" +
    "</label>\n" +
    "</div>\n" +
    "<div flex grow=\"2\">\n" +
    "<textarea id=\"settings_description\" class=\"form-control\" name=\"settings_description\" placeholder=\"project description\" ng-model=\"editableFields.description\"></textarea>\n" +
    "</div>\n" +
    "<div flex grow=\"2\"></div>\n" +
    "</div>\n" +
    "<div row>\n" +
    "<div flex conceal=\"mobile\" class=\"settings-item\"></div>\n" +
    "<div flex grow=\"2\">\n" +
    "<button class=\"btn btn-default\" ng-click=\"update()\" ng-disabled=\"editForm.$pristine\">Save</button>\n" +
    "<button class=\"btn btn-default\" ng-click=\"cancel()\">Cancel</button>\n" +
    "</div>\n" +
    "<div flex grow=\"2\" conceal=\"mobile\"></div>\n" +
    "</div>\n" +
    "</form>"
  );


  $templateCache.put('views/_sidebar.html',
    "<nav class=\"navbar navbar-sidebar\">\n" +
    "<ul class=\"nav nav-sidenav-primary\">\n" +
    "<li ng-repeat=\"primaryItem in navItems\" ng-class=\"{ active: primaryItem === activePrimary }\" ng-if=\"!primaryItem.isValid || primaryItem.isValid()\">\n" +
    "<a ng-if=\"primaryItem.href\" ng-href=\"{{navURL(primaryItem.href)}}\">\n" +
    "<span class=\"{{primaryItem.iconClass}}\"></span> {{primaryItem.label}}\n" +
    "</a>\n" +
    "<a ng-if=\"!primaryItem.href\" href=\"\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">\n" +
    "<span class=\"{{primaryItem.iconClass}}\"></span> {{primaryItem.label}} <span class=\"fa fa-angle-right\"></span>\n" +
    "</a>\n" +
    "<div ng-if=\"primaryItem.secondaryNavSections.length\" class=\"hover-nav dropdown-menu hidden-xs\">\n" +
    "<ul class=\"nav nav-sidenav-secondary\">\n" +
    "<li ng-repeat-start=\"secondarySection in primaryItem.secondaryNavSections\" ng-if=\"secondarySection.header\" class=\"dropdown-header\">\n" +
    "{{secondarySection.header}}\n" +
    "</li>\n" +
    "<li ng-repeat=\"secondaryItem in secondarySection.items\" ng-class=\"{ active: secondaryItem === activeSecondary }\" ng-if=\"!secondaryItem.isValid || secondaryItem.isValid()\">\n" +
    "<a ng-href=\"{{navURL(secondaryItem.href)}}\">{{secondaryItem.label}}</a>\n" +
    "</li>\n" +
    "<li ng-repeat-end style=\"display:none\"></li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "<div ng-if=\"primaryItem.secondaryNavSections.length\" class=\"hover-nav visible-xs-block\">\n" +
    "<ul class=\"nav nav-sidenav-secondary\">\n" +
    "<li ng-repeat-start=\"secondarySection in primaryItem.secondaryNavSections\" ng-if=\"secondarySection.header\" class=\"dropdown-header\">\n" +
    "{{secondarySection.header}}\n" +
    "</li>\n" +
    "<li ng-repeat=\"secondaryItem in secondarySection.items\" ng-class=\"{ active: secondaryItem === activeSecondary }\" ng-if=\"!secondaryItem.isValid || secondaryItem.isValid()\">\n" +
    "<a ng-href=\"{{navURL(secondaryItem.href)}}\">{{secondaryItem.label}}</a>\n" +
    "</li>\n" +
    "<li ng-repeat-end style=\"display:none\"></li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "</li>\n" +
    "</ul>\n" +
    "\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</nav>"
  );


  $templateCache.put('views/_tasks.html',
    "<div ng-controller=\"TasksController\">\n" +
    "<div ng-repeat=\"task in tasks()\" ng-if=\"!task.namespace || !projectName || task.namespace === projectName\">\n" +
    "<div class=\"tasks\" ng-class=\"hasTaskWithError() ? 'failure' : 'success'\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<div class=\"task-content\">\n" +
    "<i class=\"pficon task-icon\" ng-class=\"task.hasErrors ? 'pficon-error-circle-o' : 'pficon-ok'\"></i>\n" +
    "<div class=\"task-info\">\n" +
    "<h3>\n" +
    "{{ task | taskTitle }}.\n" +
    "</h3>\n" +
    "<div ng-if=\"task.helpLinks.length\">\n" +
    "<h4>Helpful Links</h4>\n" +
    "<ul class=\"list-unstyled\">\n" +
    "<li ng-repeat=\"link in task.helpLinks\">\n" +
    "<a href=\"{{ link.link }}\" target=\"_blank\">{{ link.title }}</a>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "<span>\n" +
    "<a href=\"\" ng-click=\"expanded = !expanded\" role=\"button\">\n" +
    "<span ng-hide=\"expanded\">Show details</span>\n" +
    "<span ng-show=\"expanded\">Hide details</span>\n" +
    "</a>\n" +
    "</span>\n" +
    "<span ng-show=\"task.status=='completed'\">\n" +
    "<span class=\"action-divider\" aria-hidden=\"true\">|</span>\n" +
    "<a href=\"\" ng-click=\"delete(task)\" role=\"button\">\n" +
    "Dismiss\n" +
    "</a>\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-show=\"expanded\">\n" +
    "\n" +
    "<alerts alerts=\"task.alerts\" hide-close-button=\"true\"></alerts>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/_templateopt.html',
    "<div class=\"template-options\" ng-show=\"parameters.length\" ng-form=\"paramForm\">\n" +
    "<div class=\"flow\">\n" +
    "<div class=\"flow-block\">\n" +
    "<h2>Parameters</h2>\n" +
    "</div>\n" +
    "<div ng-show=\"canToggle\" class=\"flow-block right\">\n" +
    "<a class=\"action action-inline\" href=\"\" ng-click=\"expand = false\" ng-show=\"expand\"><i class=\"pficon pficon-remove\"></i> Collapse</a>\n" +
    "<a class=\"action action-inline\" href=\"\" ng-click=\"expand = true\" ng-hide=\"expand\"><i class=\"pficon pficon-edit\"></i> Edit Parameters</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-group options\" ng-repeat=\"parameter in parameters\" ng-show=\"expand\" ng-init=\"paramID = 'param-' + $index\">\n" +
    "<label ng-attr-for=\"{{paramID}}\" ng-attr-title=\"{{parameter.name}}\" ng-class=\"{required: parameter.required}\">{{parameter.displayName || parameter.name}}</label>\n" +
    "<span ng-class=\"{'has-error': (paramForm[paramID].$error.required && paramForm[paramID].$touched && !cleared), 'has-warning': isOnlyWhitespace(parameter.value)}\">\n" +
    "<input ng-attr-id=\"{{paramID}}\" ng-attr-name=\"{{paramID}}\" class=\"form-control\" type=\"text\" placeholder=\"{{ parameter | parameterPlaceholder }}\" ng-model=\"parameter.value\" ng-required=\"parameter.required && !parameter.generate\" ng-blur=\"cleared = false\" ng-trim=\"false\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck ng-attr-aria-describedby=\"{{parameter.description ? (paramID + '-description') : undefined}}\">\n" +
    "</span>\n" +
    "<div class=\"help-block\" ng-if=\"parameter.description\" ng-attr-id=\"{{paramID}}-description\">{{parameter.description}}</div>\n" +
    "<div ng-show=\"paramForm[paramID].$error.required && paramForm[paramID].$touched && !cleared\" class=\"has-error\">\n" +
    "<div class=\"help-block\">{{parameter.displayName || parameter.name}} is required.</div>\n" +
    "</div>\n" +
    "<div ng-show=\"isOnlyWhitespace(parameter.value)\" class=\"has-warning help-block\">\n" +
    "The current value is \"{{parameter.value}}\", which is not empty.\n" +
    "<span ng-if=\"parameter.generate\">This will prevent a value from being generated.</span>\n" +
    "If this isn't what you want,\n" +
    "<a href=\"\" ng-click=\"parameter.value=''; cleared = true; focus(paramID)\">clear the value</a>.\n" +
    "</div>\n" +
    "</div>\n" +
    "<ul class=\"list-unstyled env-variable-list\" ng-hide=\"expand\">\n" +
    "<li class=\"options\" ng-repeat=\"parameter in parameters\" ng-init=\"paramID = 'param-' + $index\">\n" +
    "<label for=\"\" class=\"key truncate\" ng-class=\"{required: parameter.required}\" ng-attr-title=\"{{ parameter.name }}\">{{parameter.name}}</label>\n" +
    "<span class=\"value truncate\" ng-attr-title=\"{{parameter | parameterValue}}\">{{ parameter | parameterValue }}</span>\n" +
    "<div class=\"help-block\" ng-if=\"parameter.description\">{{parameter.description}}</div>\n" +
    "<div ng-show=\"paramForm[paramID].$error.required && paramForm[paramID].$touched\" class=\"has-error\">\n" +
    "<div class=\"help-block\">{{parameter.name}} is required.</div>\n" +
    "</div>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>"
  );


  $templateCache.put('views/_triggers.html',
    "<div class=\"triggers\">\n" +
    "<div class=\"builds\" ng-repeat=\"trigger in triggers\">\n" +
    "<div ng-if=\"trigger.type === 'ImageChange'\">\n" +
    "<div ng-repeat=\"build in buildsByOutputImage[(trigger.imageChangeParams.from | imageObjectRef : namespace)] | orderObjectsByDate : true track by (build | uid)\" ng-show=\"!(hideBuild)\" class=\"build animate-repeat hide-ng-leave\" kind=\"Build\" resource=\"build\">\n" +
    "<div class=\"build-summary\" ng-class=\"{'dismissible' : !(build | isIncompleteBuild)}\">\n" +
    "<div class=\"build-name\">\n" +
    "Build\n" +
    "<span ng-if=\"build | annotation : 'buildNumber'\">\n" +
    "<span ng-if=\"build | buildConfigForBuild\"><a ng-href=\"{{build | configURLForResource}}\">{{build | buildConfigForBuild}}</a>,</span>\n" +
    "<a ng-href=\"{{build | navigateResourceURL}}\">#{{build | annotation : 'buildNumber'}}</a>\n" +
    "</span>\n" +
    "<span ng-if=\"!(build | annotation : 'buildNumber')\">\n" +
    "{{build.metadata.name}}\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class=\"build-phase\">\n" +
    "<status-icon status=\"build.status.phase\"></status-icon>\n" +
    "{{build.status.phase}}<span ng-if=\"build | isIncompleteBuild\">. A new deployment will be created automatically once the build completes.</span>\n" +
    "</div>\n" +
    "<relative-timestamp timestamp=\"build.metadata.creationTimestamp\" class=\"build-timestamp\"></relative-timestamp>\n" +
    "<div ng-if=\"'builds/log' | canI : 'get'\" class=\"build-links\">\n" +
    "<a ng-if=\"!!['New', 'Pending'].indexOf(build.status.phase) && (build | buildLogURL)\" ng-href=\"{{build | buildLogURL}}\">View Log</a>\n" +
    "</div>\n" +
    "<build-close build=\"build\" hide-build=\"hideBuild\"></build-close>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/_volumes.html',
    " <div ng-repeat=\"volume in volumes\">\n" +
    "<h5>{{volume.name}}</h5>\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<div ng-if=\"volume.secret\">\n" +
    "<dt>Type:</dt>\n" +
    "<dd>\n" +
    "secret\n" +
    "<span class=\"small text-muted\">(populated by a Secret when the pod is created)</span>\n" +
    "</dd>\n" +
    "<dt>Secret name:</dt>\n" +
    "<dd>{{volume.secret.secretName}}</dd>\n" +
    "</div>\n" +
    "<div ng-if=\"volume.persistentVolumeClaim\">\n" +
    "<dt>Type:</dt>\n" +
    "<dd>\n" +
    "persistent volume claim\n" +
    "<span class=\"small text-muted\">(reference to a Persistent Volume Claim)</span>\n" +
    "</dd>\n" +
    "<dt>Claim name:</dt>\n" +
    "<dd><a ng-href=\"{{volume.persistentVolumeClaim.claimName | navigateResourceURL : 'PersistentVolumeClaim' : namespace}}\">{{volume.persistentVolumeClaim.claimName}}</a></dd>\n" +
    "<dt>Mode:</dt>\n" +
    "<dd>\n" +
    "<span ng-if=\"volume.persistentVolumeClaim.readOnly\">read-only</span>\n" +
    "<span ng-if=\"!volume.persistentVolumeClaim.readOnly\">read-write</span>\n" +
    "</dd>\n" +
    "</div>\n" +
    "<div ng-if=\"volume.hostPath\">\n" +
    "<dt>Type:</dt>\n" +
    "<dd>\n" +
    "host path\n" +
    "<span class=\"small text-muted\">(bare host directory volume)</span>\n" +
    "</dd>\n" +
    "<dt>Path:</dt>\n" +
    "<dd>{{volume.hostPath.path}}</dd>\n" +
    "</div>\n" +
    "<div ng-if=\"volume.emptyDir\">\n" +
    "<dt>Type:</dt>\n" +
    "<dd>\n" +
    "empty dir\n" +
    "<span class=\"small text-muted\">(temporary directory destroyed with the pod)</span>\n" +
    "</dd>\n" +
    "<dt>Medium:</dt>\n" +
    "<dd>\n" +
    "<span ng-if=\"!volume.emptyDir.medium\">node's default</span>\n" +
    "<span ng-if=\"volume.emptyDir.medium\">{{volume.emptyDir.medium}}</span>\n" +
    "</dd>\n" +
    "</div>\n" +
    "<div ng-if=\"volume.gitRepo\">\n" +
    "<dt>Type:</dt>\n" +
    "<dd>\n" +
    "git repo\n" +
    "<span class=\"small text-muted\">(pulled from git when the pod is created)</span>\n" +
    "</dd>\n" +
    "<dt>Repository:</dt>\n" +
    "<dd>{{volume.gitRepo.repository}}</dd>\n" +
    "<dt ng-if-start=\"volume.gitRepo.revision\">Revision:</dt>\n" +
    "<dd ng-if-end>{{volume.gitRepo.revision}}</dd>\n" +
    "</div>\n" +
    "<div ng-if=\"volume.downwardAPI\">\n" +
    "<dt>Type:</dt>\n" +
    "<dd>\n" +
    "downward API\n" +
    "<span class=\"small text-muted\">(populated with information about the pod)</span>\n" +
    "</dd>\n" +
    "<div ng-repeat=\"item in volume.downwardAPI.items\">\n" +
    "<dt>Volume file:</dt>\n" +
    "<dd>{{item.fieldRef.fieldPath}}&#8201;&#8594;&#8201;{{item.path}}</dd>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"volume.configMap\">\n" +
    "<dt>Type:</dt>\n" +
    "<dd>\n" +
    "config map\n" +
    "<span class=\"small text-muted\">(populated by a Config Map)</span>\n" +
    "</dd>\n" +
    "<dt>Name:</dt>\n" +
    "<dd>{{volume.configMap.name}}</dd>\n" +
    "<div ng-repeat=\"item in volume.configMap.items\">\n" +
    "<dt>Key to file:</dt>\n" +
    "<dd>{{item.key}}&#8201;&#8594;&#8201;{{item.path}}</dd>\n" +
    "</div>\n" +
    "</div>\n" +
    "</dl>\n" +
    "</div>"
  );


  $templateCache.put('views/_webhook-trigger-cause.html',
    "{{trigger.message === 'GitHub WebHook' ? 'GitHub webhook' : 'Generic webhook'}}: <span ng-if=\"trigger.githubWebHook.revision || trigger.genericWebHook.revision\"> {{trigger.githubWebHook.revision.git.message || trigger.genericWebHook.revision.git.message}}</span>\n" +
    "<osc-git-link ng-if=\"trigger.githubWebHook.revision || trigger.genericWebHook.revision\" class=\"hash\" uri=\"build.spec.source.git.uri\" ref=\"trigger.githubWebHook.revision.git.commit || trigger.genericWebHook.revision.git.commit\">{{trigger.githubWebHook.revision.git.commit || trigger.genericWebHook.revision.git.commit | limitTo:7}}\n" +
    "</osc-git-link>\n" +
    "<span ng-if=\"trigger.githubWebHook.revision || trigger.genericWebHook.revision\">\n" +
    "authored by {{trigger.githubWebHook.revision.git.author.name || trigger.genericWebHook.revision.git.author.name}},\n" +
    "</span>\n" +
    "<span ng-if=\"trigger.genericWebHook && !trigger.genericWebHook.revision\">\n" +
    "no revision information,\n" +
    "</span>\n" +
    "<a href=\"\" ng-if=\"!showSecret\" ng-click=\"toggleSecret()\"> show obfuscated secret</a>\n" +
    "<span ng-if=\"showSecret\">\n" +
    "{{trigger.githubWebHook.secret || trigger.genericWebHook.secret}}\n" +
    "</span>"
  );


  $templateCache.put('views/about.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"middle surface-shaded\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container surface-shaded gutter-top\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<div class=\"about\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-2 about-icon gutter-top hidden-sm hidden-xs\">\n" +
    "<img src=\"images/openshift-logo.svg\"/>\n" +
    "</div>\n" +
    "<div class=\"col-md-9\">\n" +
    "<h1>OpenShift by Red Hat&reg;</h1>\n" +
    "<h2>About</h2>\n" +
    "<p><a target=\"_blank\" href=\"https://openshift.com\">OpenShift</a> is Red Hat's Platform-as-a-Service (PaaS) that allows developers to quickly develop, host, and scale applications in a cloud environment.</p>\n" +
    "<h2 id=\"version\">Version</h2>\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<dt>OpenShift Master:</dt>\n" +
    "<dd>{{version.master.openshift || 'unknown'}}</dd>\n" +
    "<dt>Kubernetes Master:</dt>\n" +
    "<dd>{{version.master.kubernetes || 'unknown'}}</dd>\n" +
    "</dl>\n" +
    "<p>The <a target=\"_blank\" href=\"{{'welcome' | helpLink}}\">documentation</a> contains information and guides to help you learn about OpenShift and start exploring its features. From getting started with creating your first application, to trying out more advanced build and deployment techniques, it provides what you need to set up and manage your OpenShift environment as an application developer.</p>\n" +
    "<p>With the OpenShift command line interface (CLI), you can create applications and manage OpenShift projects from a terminal. To get started using the CLI, visit <a href=\"command-line\">Command Line Tools</a>.\n" +
    "</p>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/attach-pvc.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"add-to-project middle surface-shaded\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container surface-shaded\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-show=\"!pvcs || !attach.resource\">Loading...</div>\n" +
    "<div ng-show=\"pvcs && !pvcs.length && attach.resource\" class=\"empty-state-message empty-state-full-page\">\n" +
    "<h2 class=\"text-center\">No persistent volume claims.</h2>\n" +
    "<p class=\"gutter-top\">\n" +
    "A <b>persistent volume claim</b> is required to attach to this {{kind | humanizeKind}}, but none are loaded on this project.\n" +
    "</p>\n" +
    "<div ng-if=\"project && ('persistentvolumeclaims' | canI : 'create')\" class=\"text-center\">\n" +
    "<a ng-href=\"project/{{project.metadata.name}}/create-pvc\" class=\"btn btn-primary\">Request Storage</a>\n" +
    "</div>\n" +
    "<p ng-if=\"project && !('persistentvolumeclaims' | canI : 'create')\">\n" +
    "To claim storage from a persistent volume, refer to the documentation on <a target=\"_blank\" ng-href=\"{{'persistent_volumes' | helpLink}}\">using persistent volumes</a>.\n" +
    "</p>\n" +
    "<p ng-if=\"attach.resource\"><a ng-href=\"{{attach.resource | navigateResourceURL}}\">Back to {{kind | humanizeKind}} {{name}}</a></p>\n" +
    "</div>\n" +
    "<div class=\"row\" ng-show=\"pvcs && pvcs.length && attach.resource\">\n" +
    "<div class=\"col-md-10 col-md-offset-1 gutter-top\">\n" +
    "<h1>Attach Storage</h1>\n" +
    "<div>\n" +
    "<span class=\"help-block\">\n" +
    "Attach an existing persistent volume claim to the template of {{kind | humanizeKind}} <b>{{name}}</b>.\n" +
    "</span>\n" +
    "</div>\n" +
    "<form name=\"attachPVCForm\">\n" +
    "<fieldset ng-disabled=\"disableInputs\">\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"persistentVolumeClaim\" class=\"required\">Persistent volume claim</label>\n" +
    "<div>\n" +
    "<span id=\"persistent-volume-claim-help\" class=\"help-block\">Select the persistent volume claim to attach to.</span>\n" +
    "</div>\n" +
    "<table style=\"margin-bottom:0;background-color:transparent\" class=\"table table-condensed table-borderless\">\n" +
    "<tbody>\n" +
    "<tr ng-repeat=\"pvc in pvcs track by (pvc | uid)\">\n" +
    "<td style=\"padding-left:0\">\n" +
    "<input type=\"radio\" name=\"persistentVolumeClaim\" ng-model=\"attach.persistentVolumeClaim\" ng-value=\"pvc\" aria-describedby=\"pvc-help\">\n" +
    "</td>\n" +
    "<td><a ng-href=\"{{pvc | navigateResourceURL}}\">{{pvc.metadata.name}}</a></td>\n" +
    "<td ng-if=\"pvc.spec.volumeName\">{{pvc.status.capacity['storage'] | usageWithUnits: 'storage'}}</td>\n" +
    "<td ng-if=\"!pvc.spec.volumeName\">{{pvc.spec.resources.requests['storage'] | usageWithUnits: 'storage'}}</td>\n" +
    "<td>({{pvc.spec.accessModes | accessModes | join}})</td>\n" +
    "<td>\n" +
    "{{pvc.status.phase}}\n" +
    "<span ng-if=\"pvc.spec.volumeName\">\n" +
    "to volume <strong>{{pvc.spec.volumeName}}</strong>\n" +
    "</span>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "<h3>Volume</h3>\n" +
    "<div>\n" +
    "<span class=\"help-block\">\n" +
    "Specify details about how volumes are going to be mounted inside containers.\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"route-name\">Mount path</label>\n" +
    "<input id=\"mount-path\" class=\"form-control\" type=\"text\" name=\"mountPath\" ng-model=\"attach.mountPath\" ng-pattern=\"/^\\/.*$/\" placeholder=\"example: /data\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck aria-describedby=\"mount-path-help\">\n" +
    "<div>\n" +
    "<span id=\"mount-path-help\" class=\"help-block\">Mount path for the volume inside the container. If not specified, the volume will not be mounted automatically.</span>\n" +
    "</div>\n" +
    "<div class=\"has-error\" ng-show=\"attachPVCForm.mountPath.$error.pattern && attachPVCForm.mountPath.$touched\">\n" +
    "<span class=\"help-block\">\n" +
    "Mount path must be a valid path to a directory starting with <code>/</code>.\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class=\"has-error\" ng-show=\"isVolumeMountPathUsed\">\n" +
    "<span class=\"help-block\">\n" +
    "Volume mount in that path already exists. Please choose another mount path.\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"volume-name\">Volume name</label>\n" +
    "<input id=\"volume-path\" class=\"form-control\" type=\"text\" name=\"volumeName\" ng-model=\"attach.volumeName\" placeholder=\"(generated if empty)\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck aria-describedby=\"volume-name-help\">\n" +
    "<div>\n" +
    "<span id=\"volume-name-help\" class=\"help-block\">Unique name used to identify this volume. If not specified, a volume name is generated.</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"has-error\" ng-show=\"isVolumeNameUsed\">\n" +
    "<span class=\"help-block\">\n" +
    "Volume name already exists. Please choose another name.\n" +
    "</span>\n" +
    "</div>\n" +
    "<div ng-show=\"attach.containers.all\">\n" +
    "The volume will be mounted into all containers. You can <a href=\"\" ng-click=\"attach.containers.all = false\">select specific containers</a> instead.\n" +
    "</div>\n" +
    "<div ng-show=\"!attach.containers.all\" class=\"form-group\">\n" +
    "<h3>Containers</h3>\n" +
    "<div>\n" +
    "<span class=\"help-block\">\n" +
    "Attach the volume to the following containers:\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class=\"checkbox\" ng-repeat=\"container in (attach.deployment.spec.template.spec.containers || attach.deploymentConfig.spec.template.spec.containers)\">\n" +
    "<label>\n" +
    "<input type=\"checkbox\" ng-model=\"attach.containers.individual[container.name]\">\n" +
    "<b>{{container.name}}</b> from image <i>{{container.image}}</i>\n" +
    "</label>\n" +
    "</div>\n" +
    "<div class=\"has-error\" ng-show=\"!containerToAttachProvided()\">\n" +
    "<span class=\"help-block\">\n" +
    "You must select at least one container.\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"button-group gutter-top gutter-bottom\">\n" +
    "<button type=\"submit\" class=\"btn btn-primary btn-lg\" ng-click=\"attachPVC()\" ng-disabled=\"attachPVCForm.$invalid || disableInputs || !attachPVC || !containerToAttachProvided()\">Attach</button>\n" +
    "<a class=\"btn btn-default btn-lg\" role=\"button\" href=\"#\" back>Cancel</a>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "</form>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/browse/_build-details.html',
    "<div class=\"resource-details\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-sm-12\">\n" +
    "<h3>Status</h3>\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<dt>Status:</dt>\n" +
    "<dd>\n" +
    "<status-icon status=\"build.status.phase\"></status-icon>\n" +
    "{{build.status.phase}}\n" +
    "<span ng-if=\"build | jenkinsLogURL\">\n" +
    "<span class=\"text-muted\">&ndash;</span>\n" +
    "<a ng-href=\"{{build | jenkinsLogURL}}\" target=\"_blank\">View Log</a>\n" +
    "</span>\n" +
    "</dd>\n" +
    "<dt>Started:</dt>\n" +
    "<dd>\n" +
    "<span ng-if=\"build.status.startTimestamp\">\n" +
    "<relative-timestamp timestamp=\"build.status.startTimestamp\"></relative-timestamp>\n" +
    "<span><span class=\"text-muted\">&ndash;</span> {{build.status.startTimestamp | date : 'MMM dd, yyyy h:mm a'}}</span>\n" +
    "</span>\n" +
    "<span ng-if=\"!build.status.startTimestamp\"><em>not started</em></span>\n" +
    "</dd>\n" +
    "<dt>Duration:</dt>\n" +
    "<dd>\n" +
    "<span ng-switch=\"build.status.phase\" class=\"hide-ng-leave\">\n" +
    "<span ng-switch-when=\"Complete\">{{(build.status.startTimestamp || build.metadata.creationTimestamp) | duration : build.status.completionTimestamp}}</span>\n" +
    "<span ng-switch-when=\"Failed\">{{build.status.startTimestamp | duration : build.status.completionTimestamp}}</span>\n" +
    "<span ng-switch-when=\"Running\">running for <duration-until-now timestamp=\"build.status.startTimestamp\"></duration-until-now></span>\n" +
    "<span ng-switch-when=\"New\">waiting for <duration-until-now timestamp=\"build.metadata.creationTimestamp\"></duration-until-now></span>\n" +
    "<span ng-switch-when=\"Pending\">waiting for <duration-until-now timestamp=\"build.metadata.creationTimestamp\"></duration-until-now></span>\n" +
    "<span ng-switch-default>\n" +
    "<span ng-if=\"build.status.startTimestamp\">{{build.status.startTimestamp | duration : build.status.completionTimestamp}}</span>\n" +
    "<span ng-if=\"!build.status.startTimestamp\">waited for {{build.metadata.creationTimestamp | duration : build.status.completionTimestamp}}</span>\n" +
    "</span>\n" +
    "</span>\n" +
    "</dd>\n" +
    "<div ng-if=\"build.spec.triggeredBy.length\">\n" +
    "<dt>Triggered by:</dt>\n" +
    "<dd>\n" +
    "<div ng-repeat=\"trigger in build.spec.triggeredBy\">\n" +
    "<div ng-switch=\"trigger.message\">\n" +
    "<span ng-switch-when=\"Manually triggered\">Manual build</span>\n" +
    "<span ng-switch-when=\"GitHub WebHook\">\n" +
    "<ng-include src=\" 'views/_webhook-trigger-cause.html' \"></ng-include>\n" +
    "</span>\n" +
    "<span ng-switch-when=\"Generic WebHook\">\n" +
    "<ng-include src=\" 'views/_webhook-trigger-cause.html' \"></ng-include>\n" +
    "</span>\n" +
    "<span ng-switch-when=\"Image change\">\n" +
    "{{trigger.message}} for {{trigger.imageChangeBuild.fromRef.name}}\n" +
    "</span>\n" +
    "<span ng-switch-default>{{trigger.message}}</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</dd>\n" +
    "</div>\n" +
    "</dl>\n" +
    "<h3>Configuration <span class=\"small\" ng-if=\"buildConfigName\">created from <a href=\"{{build | configURLForResource}}\">{{buildConfigName}}</a></span></h3>\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<dt>Build strategy:</dt>\n" +
    "<dd>{{build.spec.strategy.type | startCase}}</dd>\n" +
    "<dt ng-if-start=\"(build | buildStrategy).from\">Builder image:</dt>\n" +
    "<dd ng-if-end class=\"truncate\">{{(build | buildStrategy).from | imageObjectRef : build.metadata.namespace}}<span ng-if=\"!(build | buildStrategy).from\"><em>none</em></span></dd>\n" +
    "<dt>Source type:</dt>\n" +
    "<dd>{{build.spec.source.type}}</dd>\n" +
    "<dt ng-if-start=\"build.spec.source.git.uri\">Source repo:</dt>\n" +
    "<dd ng-if-end><span class=\"word-break\"><osc-git-link uri=\"build.spec.source.git.uri\" ref=\"build.spec.source.git.ref\" context-dir=\"build.spec.source.contextDir\">{{build.spec.source.git.uri}}</osc-git-link></span></dd>\n" +
    "<dt ng-if-start=\"build.spec.source.git.ref\">Source ref:</dt>\n" +
    "<dd ng-if-end>{{build.spec.source.git.ref}}</dd>\n" +
    "<dt ng-if-start=\"build.spec.source.contextDir\">Source context dir:</dt>\n" +
    "<dd ng-if-end>{{build.spec.source.contextDir}}</dd>\n" +
    "<dt ng-if-start=\"build.spec.output.to\">Output image:</dt>\n" +
    "<dd ng-if-end>{{build.spec.output.to | imageObjectRef : build.metadata.namespace}}</dd>\n" +
    "<dt ng-if-start=\"build.spec.output.pushSecret.name\">Push secret:</dt>\n" +
    "<dd ng-if-end>{{build.spec.output.pushSecret.name}}</dd>\n" +
    "<dt ng-if-start=\"build.spec.strategy.jenkinsPipelineStrategy.jenkinsfilePath\">\n" +
    "Jenkinsfile Path:\n" +
    "</dt>\n" +
    "<dd ng-if-end>\n" +
    "<span ng-if=\"build | jenkinsfileLink\">\n" +
    "<a ng-href=\"{{build | jenkinsfileLink}}\">{{build.spec.strategy.jenkinsPipelineStrategy.jenkinsfilePath}}</a>\n" +
    "</span>\n" +
    "<span ng-if=\"!(build | jenkinsfileLink)\">\n" +
    "{{build.spec.strategy.jenkinsPipelineStrategy.jenkinsfilePath}}\n" +
    "</span>\n" +
    "</dd>\n" +
    "<dt ng-if-start=\"build.spec.strategy.jenkinsPipelineStrategy.jenkinsfile\">\n" +
    "Jenkinsfile:\n" +
    "</dt>\n" +
    "<dd></dd>\n" +
    "<div ng-if-end ui-ace=\"{\n" +
    "          mode: 'groovy',\n" +
    "          theme: 'eclipse',\n" +
    "          showGutter: false,\n" +
    "          rendererOptions: {\n" +
    "            fadeFoldWidgets: true,\n" +
    "            highlightActiveLine: false,\n" +
    "            showPrintMargin: false\n" +
    "          },\n" +
    "          advanced: {\n" +
    "            highlightActiveLine: false\n" +
    "          }\n" +
    "        }\" readonly ng-model=\"build.spec.strategy.jenkinsPipelineStrategy.jenkinsfile\" class=\"ace-bordered ace-inline ace-read-only mar-top-md\"></div>\n" +
    "</dl>\n" +
    "</div>\n" +
    "</div>\n" +
    "<annotations annotations=\"build.metadata.annotations\"></annotations>\n" +
    "</div>"
  );


  $templateCache.put('views/browse/_pod-details.html',
    "<div class=\"resource-details\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-lg-6\">\n" +
    "<h3>\n" +
    "Status\n" +
    "<small ng-if=\"pod | isDebugPod\">\n" +
    "debugging\n" +
    "<a ng-href=\"{{pod | debugPodSourceName | navigateResourceURL : 'Pod' : pod.metadata.namespace}}\">{{pod | debugPodSourceName}}</a>\n" +
    "</small>\n" +
    "</h3>\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<dt>Status:</dt>\n" +
    "<dd>\n" +
    "<status-icon status=\"pod | podStatus\"></status-icon>\n" +
    "{{pod | podStatus | sentenceCase}}\n" +
    "<span ng-if=\"pod.metadata.deletionTimestamp\">(expires {{pod.metadata.deletionTimestamp | date : 'medium'}})</span>\n" +
    "</dd>\n" +
    "<dt ng-if-start=\"pod.metadata.deletionTimestamp && pod.spec.terminationGracePeriodSeconds\">Grace Period:</dt>\n" +
    "<dd ng-if-end>\n" +
    "\n" +
    "<span ng-if=\"pod.spec.terminationGracePeriodSeconds < 60\">\n" +
    "{{pod.spec.terminationGracePeriodSeconds}} seconds\n" +
    "</span>\n" +
    "<span ng-if=\"pod.spec.terminationGracePeriodSeconds >= 60\">\n" +
    "{{pod.spec.terminationGracePeriodSeconds | humanizeDurationValue : 'seconds'}}\n" +
    "</span>\n" +
    "</dd>\n" +
    "<dt ng-if-start=\"pod.status.message\">Message:</dt>\n" +
    "<dd ng-if-end>{{pod.status.message}}</dd>\n" +
    "<dt>IP:</dt>\n" +
    "<dd>{{pod.status.podIP || 'unknown'}}</dd>\n" +
    "<dt>Node:</dt>\n" +
    "<dd>{{pod.spec.nodeName || 'unknown'}} <span ng-if=\"pod.status.hostIP && pod.spec.nodeName != pod.status.hostIP\">({{pod.status.hostIP}})</span></dd>\n" +
    "<dt>Restart Policy:</dt>\n" +
    "<dd>{{pod.spec.restartPolicy || 'Always'}}</dd>\n" +
    "<dt ng-if-start=\"pod.spec.activeDeadlineSeconds\">Active Deadline:</dt>\n" +
    "<dd ng-if-end>\n" +
    "\n" +
    "<span ng-if=\"pod.spec.activeDeadlineSeconds < 60\">\n" +
    "{{pod.spec.activeDeadlineSeconds}} seconds\n" +
    "</span>\n" +
    "<span ng-if=\"pod.spec.activeDeadlineSeconds >= 60\">\n" +
    "{{pod.spec.activeDeadlineSeconds | humanizeDurationValue : 'seconds'}}\n" +
    "</span>\n" +
    "<span ng-if=\"pod.status.phase === 'Running' && pod.status.startTime\" class=\"text-muted\">\n" +
    "(<duration-until-now timestamp=\"pod.status.startTime\"></duration-until-now> elapsed)\n" +
    "</span>\n" +
    "</dd>\n" +
    "</dl>\n" +
    "<div ng-repeat=\"containerStatus in pod.status.containerStatuses | orderBy:'name'\">\n" +
    "<h4>Container {{containerStatus.name}}</h4>\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<dt>State:</dt>\n" +
    "<dd>\n" +
    "<kubernetes-object-describe-container-state container-state=\"containerStatus.state\"></kubernetes-object-describe-container-state>\n" +
    "</dd>\n" +
    "<dt ng-if=\"!(containerStatus.lastState | isEmptyObj)\">Last State</dt>\n" +
    "<dd ng-if=\"!(containerStatus.lastState | isEmptyObj)\">\n" +
    "<kubernetes-object-describe-container-state container-state=\"containerStatus.lastState\"></kubernetes-object-describe-container-state>\n" +
    "</dd>\n" +
    "<dt>Ready:</dt>\n" +
    "<dd>{{containerStatus.ready}}</dd>\n" +
    "<dt>Restart Count:</dt>\n" +
    "<dd>{{containerStatus.restartCount}}</dd>\n" +
    "<div ng-if=\"pod.status.phase !== 'Completed' && !(pod | annotation : 'openshift.io/build.name') && (!containerStatus.state.running || !containerStatus.ready) && !(pod | isDebugPod) && ('pods' | canI : 'create')\" class=\"debug-pod-action\">\n" +
    "<a href=\"\" ng-click=\"debugTerminal(containerStatus.name)\" role=\"button\">Debug in terminal</a>\n" +
    "</div>\n" +
    "</dl>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"col-lg-6\">\n" +
    "<h3>Template</h3>\n" +
    "<pod-template pod-template=\"pod\" images-by-docker-reference=\"imagesByDockerReference\" builds=\"builds\" detailed=\"true\">\n" +
    "</pod-template>\n" +
    "<h4>Volumes</h4>\n" +
    "<div ng-if=\"!pod.spec.volumes.length\">\n" +
    "<p ng-if=\"(pod | annotation:'deploymentConfig') && ('deploymentconfigs' | canI : 'update')\">\n" +
    "<a ng-href=\"project/{{project.metadata.name}}/attach-pvc?kind=DeploymentConfig&name={{pod | annotation:'deploymentConfig'}}\">Attach storage and redeploy</a>\n" +
    "</p>\n" +
    "<p ng-if=\"!(pod | annotation:'deploymentConfig') || !('deploymentconfigs' | canI : 'update')\">\n" +
    "None\n" +
    "</p>\n" +
    "</div>\n" +
    "<volumes ng-if=\"pod.spec.volumes.length\" volumes=\"pod.spec.volumes\" namespace=\"project.metadata.name\"></volumes>\n" +
    "</div>\n" +
    "</div>\n" +
    "<annotations annotations=\"pod.metadata.annotations\"></annotations>\n" +
    "</div>"
  );


  $templateCache.put('views/browse/_replica-set-actions.html',
    "<div ng-if=\"('replicaSets' | canIDoAny)\" class=\"pull-right dropdown\">\n" +
    "<button type=\"button\" class=\"dropdown-toggle btn btn-default actions-dropdown-btn hidden-xs\" data-toggle=\"dropdown\">\n" +
    "Actions\n" +
    "<span class=\"caret\"></span>\n" +
    "</button>\n" +
    "<a href=\"\" class=\"dropdown-toggle actions-dropdown-kebab visible-xs-inline\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v\"></i><span class=\"sr-only\">Actions</span></a>\n" +
    "<ul class=\"dropdown-menu actions action-button\">\n" +
    "<li ng-if=\"{ group: 'extensions', resource: 'replicasets' } | canI : 'update'\">\n" +
    "<a ng-href=\"project/{{project.metadata.name}}/attach-pvc?kind=ReplicaSet&name={{deployment.metadata.name}}&group=extensions\" role=\"button\">Attach Storage</a>\n" +
    "</li>\n" +
    "<li ng-if=\"{ group: 'extensions', resource: 'replicasets' } | canI : 'update'\">\n" +
    "<a ng-href=\"project/{{projectName}}/set-limits?kind=ReplicaSet&name={{deployment.metadata.name}}&group=extensions\" role=\"button\">Set Resource Limits</a>\n" +
    "</li>\n" +
    "<li ng-if=\"!autoscalers.length && { group: 'extensions', resource: 'horizontalpodautoscalers' } | canI : 'create'\">\n" +
    "<a ng-href=\"project/{{projectName}}/edit/autoscaler?kind=ReplicaSet&name={{deployment.metadata.name}}&group=extensions\" role=\"button\">Add Autoscaler</a>\n" +
    "</li>\n" +
    "<li ng-if=\"{ group: 'extensions', resource: 'replicasets' } | canI : 'update'\">\n" +
    "<a ng-href=\"{{healthCheckURL}}\" role=\"button\">Edit Health Checks</a>\n" +
    "</li>\n" +
    "<li ng-if=\"{ group: 'extensions', resource: 'replicasets' } | canI : 'update'\">\n" +
    "<a ng-href=\"{{replicaSet | editYamlURL}}\" role=\"button\">Edit YAML</a>\n" +
    "</li>\n" +
    "<li ng-if=\"{ group: 'extensions', resource: 'replicasets' } | canI : 'delete'\">\n" +
    "\n" +
    "<delete-link kind=\"ReplicaSet\" group=\"extensions\" resource-name=\"{{deployment.metadata.name}}\" project-name=\"{{deployment.metadata.namespace}}\" replicas=\"deployment.status.replicas\" hpa-list=\"hpaForRS\" alerts=\"alerts\">\n" +
    "</delete-link>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>"
  );


  $templateCache.put('views/browse/_replica-set-details.html',
    "<div class=\"row\" style=\"max-width: 650px\">\n" +
    "<div class=\"col-sm-4 col-sm-push-8 browse-deployment-donut\">\n" +
    "<deployment-donut rc=\"deployment\" deployment-config=\"deploymentConfig\" pods=\"podsForDeployment\" hpa=\"autoscalers\" scalable=\"isScalable()\" alerts=\"alerts\">\n" +
    "</deployment-donut>\n" +
    "</div>\n" +
    "<div class=\"col-sm-8 col-sm-pull-4\">\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<dt ng-if-start=\"deployment | hasDeploymentConfig\">Status:</dt>\n" +
    "<dd ng-if-end>\n" +
    "<status-icon status=\"deployment | deploymentStatus\"></status-icon>\n" +
    "{{deployment | deploymentStatus}}\n" +
    "<span style=\"margin-left: 7px\">\n" +
    "<button ng-show=\"!rollBackCollapsed && (deployment | deploymentStatus) == 'Complete' && !(deployment | deploymentIsLatest : deploymentConfig) && !deployment.metadata.deletionTimestamp && ('deploymentconfigrollbacks' | canI : 'create')\" ng-disabled=\"(deploymentConfigDeploymentsInProgress[deploymentConfigName] | hashSize) > 0\" type=\"button\" class=\"btn btn-default btn-xs\" ng-click=\"rollBackCollapsed = !rollBackCollapsed\">Roll Back</button>\n" +
    "<div ng-show=\"rollBackCollapsed\" class=\"well well-sm\">\n" +
    "Use the following settings from {{deployment.metadata.name}} when rolling back:\n" +
    "<div class=\"checkbox\">\n" +
    "<label>\n" +
    "<input type=\"checkbox\" ng-model=\"changeScaleSettings\" ng-disabled=\"(deploymentConfigDeploymentsInProgress[deploymentConfigName] | hashSize) > 0\"> replica count and selector\n" +
    "</label>\n" +
    "</div>\n" +
    "<div class=\"checkbox\">\n" +
    "<label>\n" +
    "<input type=\"checkbox\" ng-model=\"changeStrategy\" ng-disabled=\"(deploymentConfigDeploymentsInProgress[deploymentConfigName] | hashSize) > 0\"> deployment strategy\n" +
    "</label>\n" +
    "</div>\n" +
    "<div class=\"checkbox\">\n" +
    "<label>\n" +
    "<input type=\"checkbox\" ng-model=\"changeTriggers\" ng-disabled=\"(deploymentConfigDeploymentsInProgress[deploymentConfigName] | hashSize) > 0\"> deployment trigger\n" +
    "</label>\n" +
    "</div>\n" +
    "<button type=\"button\" ng-click=\"rollbackToDeployment(deployment, changeScaleSettings, changeStrategy, changeTriggers)\" ng-disabled=\"(deploymentConfigDeploymentsInProgress[deploymentConfigName] | hashSize) > 0\" class=\"btn btn-default btn-xs\">Roll Back</button>\n" +
    "</div>\n" +
    "\n" +
    "<button ng-show=\"(deployment | deploymentIsInProgress) && !deployment.metadata.deletionTimestamp && ('replicationcontrollers' | canI : 'update')\" type=\"button\" ng-click=\"cancelRunningDeployment(deployment)\" class=\"btn btn-default btn-xs\">Cancel</button>\n" +
    "</span>\n" +
    "</dd>\n" +
    "<dt ng-if-start=\"deployment | hasDeploymentConfig\">Deployment config:</dt>\n" +
    "<dd ng-if-end>\n" +
    "<a ng-href=\"{{deploymentConfigName | navigateResourceURL : 'DeploymentConfig' : deployment.metadata.namespace}}\">{{deploymentConfigName}}</a>\n" +
    "</dd>\n" +
    "<dt ng-if-start=\"deployment | annotation:'deploymentStatusReason'\">Status reason:</dt>\n" +
    "<dd ng-if-end>\n" +
    "{{deployment | annotation:'deploymentStatusReason'}}\n" +
    "</dd>\n" +
    "<dt ng-if-start=\"deployment | deploymentIsInProgress\">Duration:</dt>\n" +
    "<dd ng-if-end>\n" +
    "<span ng-switch=\"deployment | deploymentStatus\" class=\"hide-ng-leave\">\n" +
    "<span ng-switch-when=\"Running\">running for <duration-until-now timestamp=\"deployment.metadata.creationTimestamp\"></duration-until-now></span>\n" +
    "<span ng-switch-default>waiting for <duration-until-now timestamp=\"deployment.metadata.creationTimestamp\"></duration-until-now></span>\n" +
    "</span>\n" +
    "</dd>\n" +
    "<dt>Selectors:</dt>\n" +
    "<dd>\n" +
    "<selector selector=\"deployment.spec.selector\"></selector>\n" +
    "</dd>\n" +
    "<dt>Replicas:</dt>\n" +
    "<dd>\n" +
    "\n" +
    "<replicas status=\"deployment.status.replicas\" spec=\"deployment.spec.replicas\" disable-scaling=\"!isScalable()\" scale-fn=\"scale(replicas)\" deployment=\"deployment\">\n" +
    "</replicas>\n" +
    "<span ng-if=\"autoscalers.length\">(autoscaled)</span>\n" +
    "</dd>\n" +
    "</dl>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-lg-6\">\n" +
    "<div class=\"deployment-detail\">\n" +
    "<h3>Template</h3>\n" +
    "<pod-template pod-template=\"deployment.spec.template\" images-by-docker-reference=\"imagesByDockerReference\" builds=\"builds\" detailed=\"true\" add-health-check-url=\"{{((!deploymentConfig || isActive) && ('deploymentconfigs' | canI : 'update')) ? healthCheckURL : ''}}\">\n" +
    "</pod-template>\n" +
    "<h4>Volumes</h4>\n" +
    "<div ng-if=\"!deployment.spec.template.spec.volumes.length\">\n" +
    "<div ng-if=\"kind === 'ReplicaSet'\">\n" +
    "<a ng-if=\"resource | canI : 'update'\" ng-href=\"project/{{project.metadata.name}}/attach-pvc?kind=ReplicaSet&name={{deployment.metadata.name}}&group=extensions\">Attach storage</a>\n" +
    "<span ng-if=\"!(resource | canI : 'update')\">none</span>\n" +
    "</div>\n" +
    "<div ng-if=\"kind === 'ReplicationController'\">\n" +
    "<div ng-if=\"deploymentConfigName\">\n" +
    "<a ng-if=\"'deploymentconfigs' | canI : 'update'\" ng-href=\"project/{{project.metadata.name}}/attach-pvc?kind=DeploymentConfig&name={{deploymentConfigName}}\">Attach storage and redeploy</a>\n" +
    "<span ng-if=\"!('deploymentconfigs' | canI : 'update')\">none</span>\n" +
    "</div>\n" +
    "<div ng-if=\"!deploymentConfigName\">\n" +
    "<a ng-if=\"resource | canI : 'update'\" ng-href=\"project/{{project.metadata.name}}/attach-pvc?kind=ReplicationController&name={{deployment.metadata.name}}\">Attach storage</a>\n" +
    "<span ng-if=\"!(resource | canI : 'update')\">none</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<volumes volumes=\"deployment.spec.template.spec.volumes\" namespace=\"project.metadata.name\"></volumes>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"!deploymentConfigName || autoscalers.length\">\n" +
    "<h3>Autoscaling</h3>\n" +
    "\n" +
    "<div ng-repeat=\"warning in hpaWarnings\" class=\"alert alert-warning\">\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" aria-hidden=\"true\"></span>\n" +
    "<span class=\"sr-only\">Warning:</span>\n" +
    "{{warning.message}}\n" +
    "\n" +
    "<span ng-if=\"warning.reason === 'NoCPURequest'\">\n" +
    "\n" +
    "<a ng-href=\"project/{{projectName}}/set-limits?kind=DeploymentConfig&name={{deploymentConfigName}}\" ng-if=\"deploymentConfigName && !deploymentConfigMissing && ('deploymentconfigs' | canI : 'update')\" role=\"button\">Set resource\n" +
    "<span ng-if=\"!('cpu' | isRequestCalculated : project)\">requests and</span> limits</a>\n" +
    "\n" +
    "<a ng-href=\"project/{{projectName}}/set-limits?kind=ReplicationController&name={{deployment.metadata.name}}\" ng-if=\"!deploymentConfigName && kind === 'ReplicationController' && (resource | canI : 'update')\" role=\"button\">Set resource\n" +
    "<span ng-if=\"!('cpu' | isRequestCalculated : project)\">requests and</span> limits</a>\n" +
    "<a ng-href=\"project/{{projectName}}/set-limits?kind=ReplicaSet&name={{deployment.metadata.name}}&group=extensions\" ng-if=\"!deploymentConfigName && kind === 'ReplicaSet' && (resource | canI : 'update')\" role=\"button\">Set resource\n" +
    "<span ng-if=\"!('cpu' | isRequestCalculated : project)\">requests and</span> limits</a>\n" +
    "</span>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"!autoscalers.length\">\n" +
    "<span ng-if=\"{resource: 'horizontalpodautoscalers', group: 'extensions'} | canI : 'create'\">\n" +
    "<a ng-if=\"deployment.kind === 'ReplicaSet'\" ng-href=\"project/{{projectName}}/edit/autoscaler?kind=ReplicaSet&name={{deployment.metadata.name}}&group=extensions\" role=\"button\">Add autoscaler</a>\n" +
    "<a ng-if=\"deployment.kind === 'ReplicationController'\" ng-href=\"project/{{projectName}}/edit/autoscaler?kind=ReplicationController&name={{deployment.metadata.name}}\" role=\"button\">Add autoscaler</a>\n" +
    "</span>\n" +
    "<span ng-if=\"!({resource: 'horizontalpodautoscalers', group: 'extensions'} | canI : 'create')\">\n" +
    "Autoscaling is not enabled. There are no autoscalers for this\n" +
    "<span ng-if=\"deploymentConfigName\">deployment config or deployment.</span>\n" +
    "<span ng-if=\"!deploymentConfigName\">replication controller.</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-repeat=\"hpa in autoscalers | orderBy : 'name'\">\n" +
    "<h4>{{hpa.metadata.name}}</h4>\n" +
    "<hpa hpa=\"hpa\" show-scale-target=\"hpa.spec.scaleRef.kind !== 'ReplicationController'\" alerts=\"alerts\">\n" +
    "</hpa>\n" +
    "</div>\n" +
    "</div>\n" +
    "<h3>Pods</h3>\n" +
    "<pods-table pods=\"podsForDeployment\"></pods-table>\n" +
    "<annotations annotations=\"deployment.metadata.annotations\"></annotations>"
  );


  $templateCache.put('views/browse/_replication-controller-actions.html',
    "<div ng-if=\"(('replicationControllers' | canIDoAny) || (!deploymentConfigName && !autoscalers.length && { group: 'extensions', resource: 'horizontalpodautoscalers' } | canI : 'create'))\" class=\"pull-right dropdown\">\n" +
    "<button type=\"button\" class=\"dropdown-toggle btn btn-default actions-dropdown-btn hidden-xs\" data-toggle=\"dropdown\">\n" +
    "Actions\n" +
    "<span class=\"caret\"></span>\n" +
    "</button>\n" +
    "<a href=\"\" class=\"dropdown-toggle actions-dropdown-kebab visible-xs-inline\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v\"></i><span class=\"sr-only\">Actions</span></a>\n" +
    "<ul class=\"dropdown-menu actions action-button\">\n" +
    "<li ng-if=\"!deploymentConfigName && 'replicationcontrollers' | canI : 'update'\">\n" +
    "<a ng-href=\"project/{{project.metadata.name}}/attach-pvc?kind=ReplicationController&name={{deployment.metadata.name}}\" role=\"button\">Attach Storage</a>\n" +
    "</li>\n" +
    "<li ng-if=\"deploymentConfigName && ('deploymentconfigs' | canI : 'update')\">\n" +
    "<a ng-href=\"project/{{project.metadata.name}}/attach-pvc?kind=DeploymentConfig&name={{deploymentConfigName}}\" role=\"button\">Attach Storage</a>\n" +
    "</li>\n" +
    "<li ng-if=\"deploymentConfigName && ('deploymentconfigs' | canI : 'update')\">\n" +
    "<a ng-href=\"project/{{projectName}}/set-limits?kind=DeploymentConfig&name={{deploymentConfigName}}\" role=\"button\">Set Resource Limits</a>\n" +
    "</li>\n" +
    "<li ng-if=\"!deploymentConfigName && ('replicationcontrollers' | canI : 'update')\">\n" +
    "<a ng-href=\"project/{{projectName}}/set-limits?kind=ReplicationController&name={{deployment.metadata.name}}\" role=\"button\">Set Resource Limits</a>\n" +
    "</li>\n" +
    "<li ng-if=\"!deploymentConfigName && !autoscalers.length && ({resource: 'horizontalpodautoscalers', group: 'extensions'} | canI : 'create')\">\n" +
    "\n" +
    "<a ng-href=\"project/{{projectName}}/edit/autoscaler?kind=ReplicationController&name={{deployment.metadata.name}}\" role=\"button\">Add Autoscaler</a>\n" +
    "</li>\n" +
    "\n" +
    "<li ng-if=\"(!deploymentConfigName && ('replicationcontrollers' | canI : 'update')) || (deploymentConfigName && isActive && ('deploymentconfigs' | canI : 'update'))\">\n" +
    "<a ng-href=\"{{healthCheckURL}}\" role=\"button\">Edit Health Checks</a>\n" +
    "</li>\n" +
    "<li ng-if=\"'replicationcontrollers' | canI : 'update'\">\n" +
    "<a ng-href=\"{{deployment | editYamlURL}}\" role=\"button\">Edit YAML</a>\n" +
    "</li>\n" +
    "<li ng-if=\"'replicationcontrollers' | canI : 'delete'\">\n" +
    "<delete-link kind=\"ReplicationController\" type-display-name=\"deployment\" resource-name=\"{{deployment.metadata.name}}\" project-name=\"{{deployment.metadata.namespace}}\" alerts=\"alerts\" replicas=\"deployment.status.replicas\" hpa-list=\"hpaForRS\" redirect-url=\"{{deployment | configURLForResource}}\">\n" +
    "</delete-link>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>"
  );


  $templateCache.put('views/browse/build-config.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div row mobile=\"column\" class=\"tech-preview-header\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<span ng-if=\"buildConfig | isJenkinsPipelineStrategy\" class=\"pad-top-md\"><span class=\"label label-warning\">Technology Preview</span></span>\n" +
    "</div>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<h1>\n" +
    "{{buildConfigName}}\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" ng-if=\"paused\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-original-title=\"Building from build configuration {{buildConfig.metadata.name}} has been paused.\">\n" +
    "</span>\n" +
    "<div class=\"pull-right dropdown\" ng-if=\"buildConfig\" ng-hide=\"!('buildConfigs' | canIDoAny)\">\n" +
    "\n" +
    "<button class=\"btn btn-default hidden-xs\" ng-if=\"'buildconfigs/instantiate' | canI : 'create'\" ng-click=\"startBuild()\">\n" +
    "Start Build\n" +
    "</button>\n" +
    "\n" +
    "<button type=\"button\" class=\"dropdown-toggle actions-dropdown-btn btn btn-default hidden-xs\" data-toggle=\"dropdown\">\n" +
    "Actions\n" +
    "<span class=\"caret\" aria-hidden=\"true\"></span>\n" +
    "</button>\n" +
    "<a href=\"\" class=\"dropdown-toggle actions-dropdown-kebab visible-xs-inline\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v\"></i><span class=\"sr-only\">Actions</span></a>\n" +
    "<ul class=\"dropdown-menu actions action-button\">\n" +
    "<li class=\"visible-xs-inline\" ng-if=\"'buildconfigs/instantiate' | canI : 'create'\">\n" +
    "<a href=\"\" role=\"button\" ng-click=\"startBuild()\">Start Build</a>\n" +
    "</li>\n" +
    "<li ng-if=\"'buildconfigs' | canI : 'update'\">\n" +
    "<a ng-href=\"{{buildConfig | editResourceURL}}\" role=\"button\">Edit</a>\n" +
    "</li>\n" +
    "<li ng-if=\"'buildconfigs' | canI : 'update'\">\n" +
    "<a ng-href=\"{{buildConfig | editYamlURL}}\" role=\"button\">Edit YAML</a>\n" +
    "</li>\n" +
    "<li ng-if=\"'buildconfigs' | canI : 'delete'\">\n" +
    "<delete-link kind=\"BuildConfig\" resource-name=\"{{buildConfig.metadata.name}}\" project-name=\"{{buildConfig.metadata.namespace}}\" alerts=\"alerts\">\n" +
    "</delete-link>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "<small class=\"meta\" ng-if=\"buildConfig\">created <relative-timestamp timestamp=\"buildConfig.metadata.creationTimestamp\"></relative-timestamp></small>\n" +
    "</h1>\n" +
    "<labels labels=\"buildConfig.metadata.labels\" clickable=\"true\" kind=\"builds\" title-kind=\"build configs\" project-name=\"{{buildConfig.metadata.namespace}}\" limit=\"3\"></labels>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\" persist-tab-state>\n" +
    "<div class=\"container-fluid\">\n" +
    "<div ng-if=\"!loaded\">Loading...</div>\n" +
    "<div class=\"row\" ng-if=\"loaded\">\n" +
    "<div class=\"col-md-12\" ng-class=\"{ 'hide-tabs' : !buildConfig }\">\n" +
    "<uib-tabset>\n" +
    "<uib-tab active=\"selectedTab.summary\">\n" +
    "<uib-tab-heading>Summary</uib-tab-heading>\n" +
    "\n" +
    "<div ng-if=\"!unfilteredBuilds\" class=\"gutter-bottom\">Loading...</div>\n" +
    "\n" +
    "<div ng-if=\"unfilteredBuilds && (unfilteredBuilds | hashSize) === 0\" class=\"empty-state-message text-center\">\n" +
    "<h2>No builds.</h2>\n" +
    "<p>\n" +
    "<span ng-if=\"!('buildconfigs/instantiate' | canI : 'create')\">\n" +
    "Builds will create an image from\n" +
    "</span>\n" +
    "<span ng-if=\"'buildconfigs/instantiate' | canI : 'create'\">\n" +
    "Start a new build to create an image from\n" +
    "</span>\n" +
    "<span ng-if=\"buildConfig.spec.source.type === 'Git'\">\n" +
    "source repository\n" +
    "<span class=\"word-break\"><osc-git-link uri=\"buildConfig.spec.source.git.uri\" ref=\"buildConfig.spec.source.git.ref\" context-dir=\"buildConfig.spec.source.contextDir\">{{buildConfig.spec.source.git.uri}}</osc-git-link></span>\n" +
    "</span>\n" +
    "<span ng-if=\"buildConfig.spec.source.type !== 'Git'\">\n" +
    "build configuration {{buildConfig.metadata.name}}.\n" +
    "</span>\n" +
    "</p>\n" +
    "<button class=\"btn btn-primary btn-lg\" ng-click=\"startBuild(buildConfig.metadata.name)\" ng-if=\"'buildconfigs/instantiate' | canI : 'create'\">\n" +
    "Start Build\n" +
    "</button>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"builds && (builds | hashSize) > 0\" class=\"build-config-summary\">\n" +
    "\n" +
    "<div class=\"h3\" style=\"margin-bottom: 0\">\n" +
    "<span class=\"latest-build-status\">\n" +
    "<status-icon status=\"latestBuild.status.phase\" style=\"margin-right: 5px\"></status-icon>\n" +
    "Latest build\n" +
    "\n" +
    "<a ng-href=\"{{latestBuild | navigateResourceURL}}\"><span ng-if=\"latestBuild | annotation : 'buildNumber'\">#{{latestBuild | annotation : 'buildNumber'}}</span><span ng-if=\"!(latestBuild | annotation : 'buildNumber')\">{{latestBuild.metadata.name}}</span></a>\n" +
    "<span ng-switch=\"latestBuild.status.phase\" class=\"hide-ng-leave\">\n" +
    "<span ng-switch-when=\"Complete\">complete.</span>\n" +
    "<span ng-switch-when=\"Failed\">failed.</span>\n" +
    "<span ng-switch-when=\"Error\">encountered an error.</span>\n" +
    "<span ng-switch-when=\"Cancelled\">was cancelled.</span>\n" +
    "<span ng-switch-default>is {{latestBuild.status.phase | lowercase}}.</span>\n" +
    "</span>\n" +
    "</span>\n" +
    "<span ng-if=\"latestBuild | buildLogURL\">\n" +
    "\n" +
    "<span ng-if=\"latestBuild | isJenkinsPipelineStrategy\">\n" +
    "<a ng-href=\"{{latestBuild | buildLogURL}}\" target=\"_blank\">View Log</a>\n" +
    "</span>\n" +
    "\n" +
    "<span ng-if=\"!(latestBuild | isJenkinsPipelineStrategy) && ('builds/log' | canI : 'get')\">\n" +
    "<a ng-href=\"{{latestBuild | buildLogURL}}\">View Log</a>\n" +
    "</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class=\"latest-build-timestamp meta text-muted\">\n" +
    "<span ng-if=\"!latestBuild.status.startTimestamp\">\n" +
    "created <relative-timestamp timestamp=\"latestBuild.metadata.creationTimestamp\"></relative-timestamp>\n" +
    "</span>\n" +
    "<span ng-if=\"latestBuild.status.startTimestamp\">\n" +
    "started <relative-timestamp timestamp=\"latestBuild.status.startTimestamp\"></relative-timestamp>\n" +
    "</span>\n" +
    "</div>\n" +
    "<build-trends-chart builds=\"builds\"></build-trends-chart>\n" +
    "</div>\n" +
    "<div ng-if=\"loaded && (unfilteredBuilds | hashSize) > 0\">\n" +
    "<div class=\"table-filter-wrapper\">\n" +
    "<project-filter></project-filter>\n" +
    "</div>\n" +
    "<table ng-if=\"!(buildConfig | isJenkinsPipelineStrategy)\" class=\"table table-bordered table-hover table-mobile\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Build</th>\n" +
    "<th>Status</th>\n" +
    "<th>Created</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody ng-if=\"(builds | hashSize) == 0\">\n" +
    "<tr><td colspan=\"3\"><em>{{emptyMessage}}</em></td></tr>\n" +
    "</tbody>\n" +
    "<tbody ng-repeat=\"build in orderedBuilds\">\n" +
    "<tr>\n" +
    "<td data-title=\"Build\">\n" +
    "\n" +
    "<span ng-if=\"build | annotation : 'buildNumber'\">\n" +
    "<a ng-href=\"{{build | navigateResourceURL}}\">#{{build | annotation : 'buildNumber'}}</a>\n" +
    "</span>\n" +
    "<span ng-if=\"!(build | annotation : 'buildNumber')\">\n" +
    "<a ng-href=\"{{build | navigateResourceURL}}\">{{build.metadata.name}}</a>\n" +
    "</span>\n" +
    "<span ng-if=\"build.status.message\" class=\"pficon pficon-warning-triangle-o\" style=\"cursor: help\" data-toggle=\"popover\" data-trigger=\"hover\" dynamic-content=\"{{build.status.message}}\"></span>\n" +
    "</td>\n" +
    "<td data-title=\"Status\">\n" +
    "<div row class=\"status\">\n" +
    "<build-status build=\"build\"></build-status>\n" +
    "</div>\n" +
    "</td>\n" +
    "<td data-title=\"Created\">\n" +
    "<relative-timestamp timestamp=\"build.metadata.creationTimestamp\"></relative-timestamp>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "<div ng-if=\"buildConfig | isJenkinsPipelineStrategy\">\n" +
    "<build-pipeline build=\"build\" ng-repeat=\"build in orderedBuilds track by (build | uid)\"></build-pipeline>\n" +
    "<table ng-if=\"(builds | hashSize) === 0\" class=\"table table-bordered table-hover table-mobile\">\n" +
    "<tbody><tr><td><em>{{emptyMessage}}</em></td></tr></tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "</uib-tab>\n" +
    "<uib-tab active=\"selectedTab.configuration\" ng-if=\"buildConfig\">\n" +
    "<uib-tab-heading>Configuration</uib-tab-heading>\n" +
    "<div class=\"resource-details\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-lg-6\">\n" +
    "<h3>Configuration</h3>\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<div>\n" +
    "<dt>Build strategy:</dt>\n" +
    "<dd>{{buildConfig.spec.strategy.type | startCase}}</dd>\n" +
    "</div>\n" +
    "<div ng-switch=\"buildConfig.spec.strategy.type\">\n" +
    "<div ng-switch-when=\"Source\">\n" +
    "<div ng-if=\"buildConfig.spec.strategy.sourceStrategy.from\">\n" +
    "<dt>Builder image:</dt>\n" +
    "<dd>{{buildConfig.spec.strategy.sourceStrategy.from | imageObjectRef : buildConfig.metadata.namespace}}</dd>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-switch-when=\"Docker\">\n" +
    "<div ng-if=\"buildConfig.spec.strategy.dockerStrategy.from\">\n" +
    "<dt>Builder image stream:</dt>\n" +
    "<dd>{{buildConfig.spec.strategy.dockerStrategy.from | imageObjectRef : buildConfig.metadata.namespace}}</dd>\n" +
    "</div>\n" +
    "<div ng-if=\"buildConfig.spec.source.dockerfile\">\n" +
    "<dt>Dockerfile:</dt><dd></dd>\n" +
    "<div ui-ace=\"{\n" +
    "                                      mode: 'dockerfile',\n" +
    "                                      theme: 'dreamweaver',\n" +
    "                                      onLoad: aceLoaded,\n" +
    "                                      highlightActiveLine: false,\n" +
    "                                      showGutter: false,\n" +
    "                                      rendererOptions: {\n" +
    "                                        fadeFoldWidgets: true,\n" +
    "                                        highlightActiveLine: false,\n" +
    "                                        showPrintMargin: false\n" +
    "                                      },\n" +
    "                                      advanced: {\n" +
    "                                        highlightActiveLine: false\n" +
    "                                      }\n" +
    "                                    }\" readonly ng-model=\"buildConfig.spec.source.dockerfile\" class=\"ace-bordered ace-read-only ace-inline dockerfile-mode mar-top-md\"></div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-switch-when=\"Custom\">\n" +
    "<div ng-if=\"buildConfig.spec.strategy.customStrategy.from\">\n" +
    "<dt>Builder image stream:</dt>\n" +
    "<dd>{{buildConfig.spec.strategy.customStrategy.from | imageObjectRef : buildConfig.metadata.namespace}}\n" +
    "</dd>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"buildConfig.spec.source\">\n" +
    "<div ng-if=\"buildConfig.spec.source.type == 'Git'\">\n" +
    "<dt>Source repo:</dt>\n" +
    "<dd><span class=\"word-break\"><osc-git-link uri=\"buildConfig.spec.source.git.uri\" ref=\"buildConfig.spec.source.git.ref\" context-dir=\"buildConfig.spec.source.contextDir\">{{buildConfig.spec.source.git.uri}}</osc-git-link></span></dd>\n" +
    "<dt ng-if=\"buildConfig.spec.source.git.ref\">Source ref:</dt>\n" +
    "<dd ng-if=\"buildConfig.spec.source.git.ref\">{{buildConfig.spec.source.git.ref}}</dd>\n" +
    "<dt ng-if=\"buildConfig.spec.source.contextDir\">Source context dir:</dt>\n" +
    "<dd ng-if=\"buildConfig.spec.source.contextDir\">{{buildConfig.spec.source.contextDir}}</dd>\n" +
    "</div>\n" +
    "<div ng-if=\"buildConfig | isJenkinsPipelineStrategy\">\n" +
    "<div ng-if=\"buildConfig.spec.strategy.jenkinsPipelineStrategy.jenkinsfilePath\">\n" +
    "<dt>Jenkinsfile Path:</dt>\n" +
    "<dd ng-if=\"buildConfig | jenkinsfileLink\">\n" +
    "<a ng-href=\"{{buildConfig | jenkinsfileLink}}\">{{buildConfig.spec.strategy.jenkinsPipelineStrategy.jenkinsfilePath}}</a>\n" +
    "</dd>\n" +
    "<dd ng-if=\"!(buildConfig | jenkinsfileLink)\">\n" +
    "{{buildConfig.spec.strategy.jenkinsPipelineStrategy.jenkinsfilePath}}\n" +
    "</dd>\n" +
    "</div>\n" +
    "<div ng-if=\"buildConfig.spec.strategy.jenkinsPipelineStrategy.jenkinsfile\">\n" +
    "<dt>Jenkinsfile:</dt><dd></dd>\n" +
    "<div ui-ace=\"{\n" +
    "                                      mode: 'groovy',\n" +
    "                                      theme: 'eclipse',\n" +
    "                                      showGutter: false,\n" +
    "                                      rendererOptions: {\n" +
    "                                        fadeFoldWidgets: true,\n" +
    "                                        highlightActiveLine: false,\n" +
    "                                        showPrintMargin: false\n" +
    "                                      },\n" +
    "                                      advanced: {\n" +
    "                                        highlightActiveLine: false\n" +
    "                                      }\n" +
    "                                    }\" readonly ng-model=\"buildConfig.spec.strategy.jenkinsPipelineStrategy.jenkinsfile\" class=\"ace-bordered ace-inline ace-read-only mar-top-md\"></div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"buildConfig.spec.source.type == 'None'\">\n" +
    "<dt>Source:</dt>\n" +
    "<dd>\n" +
    "<i>none</i>\n" +
    "<span class=\"help action-inline\">\n" +
    "<a href>\n" +
    "<i class=\"pficon pficon-help\" data-toggle=\"tooltip\" aria-hidden=\"true\" data-original-title=\"No source inputs have been defined for this build configuration.\">\n" +
    "</i>\n" +
    "</a>\n" +
    "</span>\n" +
    "</dd>\n" +
    "</div>\n" +
    "<div ng-if=\"buildConfig.spec.source.images\" class=\"image-sources\">\n" +
    "<dt>Image sources:</dt>\n" +
    "<dd></dd>\n" +
    "<div ng-repeat=\"imageSource in imageSources\" class=\"image-source-item\">\n" +
    "<h4>{{imageSource.from | imageObjectRef : buildConfig.metadata.namespace}}</h4>\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<div class=\"is-item-description\">\n" +
    "<dt>Paths</dt>\n" +
    "<div ng-repeat=\"(source, destination) in imageSourcesPaths[$index]\" class=\"image-source-paths\">\n" +
    "<dd><span class=\"source-path\">{{source}}</span><i class=\"fa fa-long-arrow-right\"></i><span class=\"destination-dir\">{{destination}}</span></dd>\n" +
    "</div>\n" +
    "</div>\n" +
    "</dl>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"buildConfig.spec.output.to\">\n" +
    "<dt>Output to:</dt>\n" +
    "<dd>{{buildConfig.spec.output.to | imageObjectRef : buildConfig.metadata.namespace}}</dd>\n" +
    "</div>\n" +
    "<div class=\"run-policy\">\n" +
    "<dt>Run Policy:</dt>\n" +
    "<dd>\n" +
    "{{buildConfig.spec.runPolicy | sentenceCase}}\n" +
    "<span class=\"help action-inline\">\n" +
    "<a href ng-switch=\"buildConfig.spec.runPolicy\">\n" +
    "<i ng-switch-when=\"Serial\" class=\"pficon pficon-help\" data-toggle=\"tooltip\" aria-hidden=\"true\" data-original-title=\"Builds triggered from this Build Configuration will run one at the time, in the order they have been triggered.\"></i>\n" +
    "<i ng-switch-when=\"Parallel\" class=\"pficon pficon-help\" data-toggle=\"tooltip\" aria-hidden=\"true\" data-original-title=\"Builds triggered from this Build Configuration will run all at the same time. The order in which they will finish is not guranteed.\"></i>\n" +
    "<i ng-switch-when=\"SerialLatestOnly\" class=\"pficon pficon-help\" data-toggle=\"tooltip\" aria-hidden=\"true\" data-original-title=\"Builds triggered from this Build Configuration will run one at the time. When a currently running build completes, the next build that will run is the latest build created. Other queued builds will be cancelled.\"></i>\n" +
    "<i ng-switch-default class=\"pficon pficon-help\" data-toggle=\"tooltip\" aria-hidden=\"true\" data-original-title=\"Builds triggered from this Build Configuration will run using the {{buildConfig.spec.runPolicy | sentenceCase}} policy.\"></i>\n" +
    "</a>\n" +
    "</span>\n" +
    "</dd>\n" +
    "</div>\n" +
    "</dl>\n" +
    "</div>\n" +
    "<div class=\"col-lg-6\">\n" +
    "<h3>Triggers</h3>\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<div ng-repeat=\"trigger in buildConfig.spec.triggers\">\n" +
    "<div ng-switch=\"trigger.type\">\n" +
    "<div ng-switch-when=\"GitHub\">\n" +
    "<dt>GitHub webhook URL:\n" +
    "<a href=\"{{'webhooks' | helpLink}}\" target=\"_blank\"><span class=\"learn-more-block\">Learn more\n" +
    "<i class=\"fa fa-external-link\"></i></span></a>\n" +
    "</dt>\n" +
    "<dd>\n" +
    "<copy-to-clipboard clipboard-text=\"buildConfig.metadata.name | webhookURL : trigger.type : trigger.github.secret : project.metadata.name\"></copy-to-clipboard>\n" +
    "</dd>\n" +
    "</div>\n" +
    "<div ng-switch-when=\"Generic\">\n" +
    "<dt>Generic webhook URL:\n" +
    "<a href=\"{{'webhooks' | helpLink}}\" target=\"_blank\"><span class=\"learn-more-block\">Learn more <i class=\"fa fa-external-link\"></i></span></a>\n" +
    "</dt>\n" +
    "<dd>\n" +
    "<copy-to-clipboard clipboard-text=\"buildConfig.metadata.name | webhookURL : trigger.type : trigger.generic.secret : project.metadata.name\"></copy-to-clipboard>\n" +
    "</dd>\n" +
    "</div>\n" +
    "<div ng-switch-when=\"ImageChange\">\n" +
    "<dt>\n" +
    "New image for:\n" +
    "</dt>\n" +
    "<dd>\n" +
    "{{(trigger.imageChange.from || (buildConfig | buildStrategy).from) | imageObjectRef : buildConfig.metadata.namespace}}\n" +
    "</dd>\n" +
    "</div>\n" +
    "<div ng-switch-when=\"ConfigChange\">\n" +
    "<dt>Config change for:</dt>\n" +
    "<dd>Build config {{buildConfig.metadata.name}}</dd>\n" +
    "</div>\n" +
    "<div ng-switch-default>\n" +
    "<dt>Other trigger:</dt>\n" +
    "<dd>{{trigger.type}}</dd>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<dt>Manual (CLI):\n" +
    "<a href=\"{{'start-build' | helpLink}}\" target=\"_blank\">\n" +
    "<span class=\"learn-more-block\">Learn more <i class=\"fa fa-external-link\"> </i></span>\n" +
    "</a>\n" +
    "</dt>\n" +
    "<dd>\n" +
    "<copy-to-clipboard clipboard-text=\"'oc start-build ' + buildConfig.metadata.name + ' -n ' + project.metadata.name\"></copy-to-clipboard>\n" +
    "</dd>\n" +
    "</dl>\n" +
    "</div>\n" +
    "</div>\n" +
    "<annotations annotations=\"buildConfig.metadata.annotations\"></annotations>\n" +
    "</div>\n" +
    "</uib-tab>\n" +
    "<uib-tab heading=\"Environment\" active=\"selectedTab.environment\" ng-if=\"buildConfig && !(buildConfig | isJenkinsPipelineStrategy)\">\n" +
    "<uib-tab-heading>Environment</uib-tab-heading>\n" +
    "<h3>Environment Variables</h3>\n" +
    "<ng-form name=\"forms.bcEnvVars\">\n" +
    "<div ng-if=\"'buildconfigs' | canI : 'update'\">\n" +
    "<key-value-editor entries=\"envVars\" key-placeholder=\"Name\" value-placeholder=\"Value\" key-validator=\"[A-Za-z_][A-Za-z0-9_]*\" key-validator-error=\"Please enter a valid key\" key-validator-error-tooltip=\"A valid environment variable name is an alphanumeric (a-z and 0-9) string beginning with a letter that may contain underscores.\" add-row-link=\"Add environment variable\" show-header></key-value-editor>\n" +
    "<button class=\"btn btn-default\" ng-click=\"saveEnvVars()\" ng-disabled=\"forms.bcEnvVars.$pristine || forms.bcEnvVars.$invalid\">Save</button>\n" +
    "<a ng-if=\"!forms.bcEnvVars.$pristine\" href=\"\" ng-click=\"clearEnvVarUpdates()\" class=\"mar-left-sm\" style=\"vertical-align: -2px\">Clear changes</a>\n" +
    "</div>\n" +
    "<key-value-editor ng-if=\"!('buildconfigs' | canI : 'update')\" entries=\"envVars\" key-placeholder=\"Name\" value-placeholder=\"Value\" is-readonly cannot-add cannot-sort cannot-delete show-header></key-value-editor>\n" +
    "</ng-form>\n" +
    "</uib-tab>\n" +
    "</uib-tabset>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/browse/build.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div row mobile=\"column\" class=\"tech-preview-header\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<span ng-if=\"build | isJenkinsPipelineStrategy\" class=\"pad-top-md\"><span class=\"label label-warning\">Technology Preview</span></span>\n" +
    "</div>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"!loaded\" class=\"mar-top-xl\">Loading...</div>\n" +
    "<div ng-if=\"build\">\n" +
    "<h1>\n" +
    "{{build.metadata.name}}\n" +
    "<span ng-if=\"build.status.message\" class=\"pficon pficon-warning-triangle-o\" style=\"cursor: help\" data-toggle=\"popover\" data-trigger=\"hover\" dynamic-content=\"{{build.status.message}}\"></span>\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" ng-if=\"paused\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-original-title=\"Building from build configuration {{buildConfig.metadata.name}} has been paused.\">\n" +
    "</span>\n" +
    "<small class=\"meta\">created <relative-timestamp timestamp=\"build.metadata.creationTimestamp\"></relative-timestamp></small>\n" +
    "<div class=\"pull-right dropdown\" ng-hide=\"!('builds' | canIDoAny)\">\n" +
    "\n" +
    "<button class=\"btn btn-default hidden-xs\" ng-click=\"cancelBuild()\" ng-if=\"!build.metadata.deletionTimestamp && (build | isIncompleteBuild) && ('builds' | canI : 'update')\">Cancel Build</button>\n" +
    "<button class=\"btn btn-default hidden-xs\" ng-click=\"cloneBuild()\" ng-hide=\"build.metadata.deletionTimestamp || (build | isIncompleteBuild) || !('builds/clone' | canI : 'create')\" ng-disabled=\"!canBuild\">Rebuild</button>\n" +
    "\n" +
    "<button type=\"button\" class=\"dropdown-toggle btn btn-default actions-dropdown-btn hidden-xs\" data-toggle=\"dropdown\">\n" +
    "Actions\n" +
    "<span class=\"caret\" aria-hidden=\"true\"></span>\n" +
    "</button>\n" +
    "<a href=\"\" class=\"dropdown-toggle actions-dropdown-kebab visible-xs-inline\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v\"></i><span class=\"sr-only\">Actions</span></a>\n" +
    "<ul class=\"dropdown-menu actions action-button\">\n" +
    "<li ng-if=\"!build.metadata.deletionTimestamp && (build | isIncompleteBuild) && ('builds' | canI : 'update')\" class=\"visible-xs-inline\">\n" +
    "<a href=\"\" role=\"button\" ng-click=\"cancelBuild()\">Cancel Build</a>\n" +
    "</li>\n" +
    "<li class=\"visible-xs-inline\" ng-class=\"{ disabled: !canBuild }\" ng-hide=\"build.metadata.deletionTimestamp || (build | isIncompleteBuild) || !('builds/clone' | canI : 'create')\">\n" +
    "<a href=\"\" role=\"button\" ng-click=\"cloneBuild()\" ng-attr-aria-disabled=\"{{canBuild ? undefined : 'true'}}\" ng-class=\"{ 'disabled-link': !canBuild }\">Rebuild</a>\n" +
    "</li>\n" +
    "<li ng-if=\"('builds' | canI : 'update')\">\n" +
    "<a ng-href=\"{{build | editYamlURL}}\" role=\"button\">Edit YAML</a>\n" +
    "</li>\n" +
    "<li ng-if=\"('builds' | canI : 'delete')\">\n" +
    "<delete-link kind=\"Build\" resource-name=\"{{build.metadata.name}}\" project-name=\"{{build.metadata.namespace}}\" alerts=\"alerts\" redirect-url=\"{{build | configURLForResource}}\">\n" +
    "</delete-link>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "</h1>\n" +
    "<labels ng-if=\"buildConfigName\" labels=\"build.metadata.labels\" clickable=\"true\" kind=\"builds\" title-kind=\"builds for build config {{buildConfigName}}\" project-name=\"{{build.metadata.namespace}}\" limit=\"3\" navigate-url=\"project/{{build.metadata.namespace}}/browse/builds/{{buildConfigName}}\"></labels>\n" +
    "<labels ng-if=\"!buildConfigName\" labels=\"build.metadata.labels\" limit=\"3\"></labels>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\" persist-tab-state>\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\" ng-if=\"build\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<uib-tabset>\n" +
    "<uib-tab active=\"selectedTab.details\">\n" +
    "<uib-tab-heading>Details</uib-tab-heading>\n" +
    "<build-pipeline build=\"build\" ng-if=\"build | isJenkinsPipelineStrategy\"></build-pipeline>\n" +
    "<ng-include src=\" 'views/browse/_build-details.html' \"></ng-include>\n" +
    "</uib-tab>\n" +
    "<uib-tab heading=\"Environment\" active=\"selectedTab.environment\" ng-if=\"!(build | isJenkinsPipelineStrategy)\">\n" +
    "<uib-tab-heading>Environment</uib-tab-heading>\n" +
    "<h3>Environment Variables</h3>\n" +
    "<p ng-if=\"'buildconfigs' | canI : 'update'\">\n" +
    "<span class=\"pficon pficon-info\" aria-hidden=\"true\"></span>\n" +
    "Environment variables can be edited on the <a ng-href=\"{{build | configURLForResource}}?tab=environment\">build configuration</a>.\n" +
    "</p>\n" +
    "<key-value-editor entries=\"(build | buildStrategy).env\" key-placeholder=\"Name\" value-placeholder=\"Value\" cannot-add cannot-delete cannot-sort is-readonly show-header></key-value-editor>\n" +
    "<em ng-if=\"!(build | buildStrategy).env\">The build strategy had no environment variables defined.</em>\n" +
    "</uib-tab>\n" +
    "<uib-tab active=\"selectedTab.logs\" ng-if=\"!(build | isJenkinsPipelineStrategy) && ('builds/log' | canI : 'get')\">\n" +
    "<uib-tab-heading>Logs</uib-tab-heading>\n" +
    "<log-viewer ng-if=\"selectedTab.logs\" follow-affix-top=\"390\" follow-affix-bottom=\"90\" resource=\"builds/log\" name=\"build.metadata.name\" context=\"projectContext\" options=\"logOptions\" empty=\"logEmpty\" run=\"logCanRun\">\n" +
    "<label>Status:</label>\n" +
    "<status-icon status=\"build.status.phase\"></status-icon>\n" +
    "<span class=\"space-after\">{{build.status.phase}}</span>\n" +
    "<div ng-if=\"build.status.startTimestamp && !logEmpty\" class=\"log-timestamps\">\n" +
    "Log from {{build.status.startTimestamp | date : 'short'}}\n" +
    "<span ng-if=\"build.status.completionTimestamp\">\n" +
    "to {{build.status.completionTimestamp | date : 'short'}}\n" +
    "</span>\n" +
    "</div>\n" +
    "</log-viewer>\n" +
    "</uib-tab>\n" +
    "<uib-tab active=\"selectedTab.events\" ng-if=\"('events' | canI : 'watch')\">\n" +
    "<uib-tab-heading>Events</uib-tab-heading>\n" +
    "<events resource-kind=\"Pod\" resource-name=\"{{build | annotation : 'buildPod'}}\" project-context=\"projectContext\" ng-if=\"selectedTab.events\"></events>\n" +
    "</uib-tab>\n" +
    "</uib-tabset>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/browse/deployment-config.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div>\n" +
    "<h1>\n" +
    "{{deploymentConfigName}}\n" +
    "<div class=\"pull-right dropdown\" ng-if=\"deploymentConfig\" ng-hide=\"!('deploymentConfigs' | canIDoAny)\">\n" +
    "\n" +
    "<button ng-if=\"'deploymentconfigs' | canI : 'update'\" class=\"btn btn-default hidden-xs\" ng-click=\"startLatestDeployment()\" ng-disabled=\"!canDeploy()\">\n" +
    "Deploy\n" +
    "</button>\n" +
    "\n" +
    "<button type=\"button\" class=\"dropdown-toggle btn btn-default actions-dropdown-btn hidden-xs\" data-toggle=\"dropdown\">\n" +
    "Actions\n" +
    "<span class=\"caret\" aria-hidden=\"true\"></span>\n" +
    "</button>\n" +
    "<a href=\"\" class=\"dropdown-toggle actions-dropdown-kebab visible-xs-inline\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v\"></i><span class=\"sr-only\">Actions</span></a>\n" +
    "<ul class=\"dropdown-menu actions action-button\">\n" +
    "<li class=\"visible-xs-inline\" ng-class=\"{ disabled: !canDeploy() }\" ng-if=\"'deploymentconfigs' | canI : 'update'\">\n" +
    "<a href=\"\" role=\"button\" ng-attr-aria-disabled=\"{{canDeploy() ? undefined : 'true'}}\" ng-class=\"{ 'disabled-link': !canDeploy() }\" ng-click=\"startLatestDeployment()\">Deploy</a>\n" +
    "</li>\n" +
    "<li ng-if=\"'deploymentconfigs' | canI : 'update'\">\n" +
    "<a ng-href=\"project/{{project.metadata.name}}/attach-pvc?kind=DeploymentConfig&name={{deploymentConfig.metadata.name}}\" role=\"button\">Attach Storage</a>\n" +
    "</li>\n" +
    "<li ng-if=\"'deploymentconfigs' | canI : 'update'\">\n" +
    "<a ng-href=\"project/{{projectName}}/set-limits?kind=DeploymentConfig&name={{deploymentConfig.metadata.name}}\" role=\"button\">Set Resource Limits</a>\n" +
    "</li>\n" +
    "<li ng-if=\"!autoscalers.length && ({resource: 'horizontalpodautoscalers', group: 'extensions'} | canI : 'create')\">\n" +
    "\n" +
    "<a ng-href=\"project/{{projectName}}/edit/autoscaler?kind=DeploymentConfig&name={{deploymentConfig.metadata.name}}\" role=\"button\">Add Autoscaler</a>\n" +
    "</li>\n" +
    "<li ng-if=\"autoscalers.length === 1 && ({resource: 'horizontalpodautoscalers', group: 'extensions'} | canI : 'update')\">\n" +
    "\n" +
    "<a ng-href=\"project/{{projectName}}/edit/autoscaler?kind=HorizontalPodAutoscaler&group=extensions&name={{autoscalers[0].metadata.name}}\" role=\"button\">Edit Autoscaler</a>\n" +
    "</li>\n" +
    "<li ng-if=\"'deploymentconfigs' | canI : 'update'\">\n" +
    "<a ng-href=\"{{healthCheckURL}}\" role=\"button\">Edit Health Checks</a>\n" +
    "</li>\n" +
    "<li ng-if=\"'deploymentconfigs' | canI : 'update'\">\n" +
    "<a ng-href=\"{{deploymentConfig | editYamlURL}}\" role=\"button\">Edit YAML</a>\n" +
    "</li>\n" +
    "<li ng-if=\"'deploymentconfigs' | canI : 'delete'\">\n" +
    "<delete-link kind=\"DeploymentConfig\" resource-name=\"{{deploymentConfig.metadata.name}}\" project-name=\"{{deploymentConfig.metadata.namespace}}\" alerts=\"alerts\" hpa-list=\"autoscalers\">\n" +
    "</delete-link>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "\n" +
    "<small class=\"meta\" ng-if=\"deploymentConfig\">created <relative-timestamp timestamp=\"deploymentConfig.metadata.creationTimestamp\"></relative-timestamp></small>\n" +
    "</h1>\n" +
    "<labels labels=\"deploymentConfig.metadata.labels\" clickable=\"true\" kind=\"deployments\" title-kind=\"deployment configs\" project-name=\"{{deploymentConfig.metadata.namespace}}\" limit=\"3\"></labels>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\" persist-tab-state>\n" +
    "<div class=\"container-fluid\">\n" +
    "<div ng-if=\"!loaded\">Loading...</div>\n" +
    "<div class=\"row\" ng-if=\"loaded\">\n" +
    "<div class=\"col-md-12\" ng-class=\"{ 'hide-tabs' : !deploymentConfig }\">\n" +
    "<uib-tabset>\n" +
    "<uib-tab active=\"selectedTab.details\">\n" +
    "<uib-tab-heading>Details</uib-tab-heading>\n" +
    "<div class=\"resource-details\" ng-if=\"deploymentConfig\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-lg-6\">\n" +
    "<h3>Configuration</h3>\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<dt>Selectors:</dt>\n" +
    "<dd>\n" +
    "<selector selector=\"deploymentConfig.spec.selector\"></selector>\n" +
    "</dd>\n" +
    "<dt>Replicas:</dt>\n" +
    "<dd>\n" +
    "<replicas spec=\"deploymentConfig.spec.replicas\" disable-scaling=\"autoscalers.length || deploymentInProgress\" scale-fn=\"scale(replicas)\" deployment=\"deploymentConfig\"></replicas>\n" +
    "<span ng-if=\"autoscalers.length\">(autoscaled)</span>\n" +
    "</dd>\n" +
    "<div ng-if=\"deploymentConfig.spec.strategy.type\">\n" +
    "<dt>Strategy:</dt>\n" +
    "<dd>{{deploymentConfig.spec.strategy.type}}</dd>\n" +
    "</div>\n" +
    "<div ng-if=\"deploymentConfig.spec.strategy.rollingParams\">\n" +
    "<dt>Update Period:</dt>\n" +
    "<dd>{{deploymentConfig.spec.strategy.rollingParams.updatePeriodSeconds}} sec</dd>\n" +
    "<dt>Interval:</dt>\n" +
    "<dd>{{deploymentConfig.spec.strategy.rollingParams.intervalSeconds}} sec</dd>\n" +
    "<dt>Timeout:</dt>\n" +
    "<dd>{{deploymentConfig.spec.strategy.rollingParams.timeoutSeconds}} sec</dd>\n" +
    "<dt>Max Unavailable:</dt>\n" +
    "<dd>{{deploymentConfig.spec.strategy.rollingParams.maxUnavailable}}</dd>\n" +
    "<dt>Max Surge:</dt>\n" +
    "<dd>{{deploymentConfig.spec.strategy.rollingParams.maxSurge}}</dd>\n" +
    "</div>\n" +
    "\n" +
    "</dl>\n" +
    "<h3>Template</h3>\n" +
    "<pod-template pod-template=\"deploymentConfig.spec.template\" images-by-docker-reference=\"imagesByDockerReference\" builds=\"builds\" detailed=\"true\" add-health-check-url=\"{{('deploymentconfigs' | canI : 'update') ? healthCheckURL : ''}}\">\n" +
    "</pod-template>\n" +
    "<h4>Volumes</h4>\n" +
    "<p ng-if=\"!deploymentConfig.spec.template.spec.volumes.length\">\n" +
    "<a ng-if=\"'deploymentconfigs' | canI : 'update'\" ng-href=\"project/{{project.metadata.name}}/attach-pvc?kind=DeploymentConfig&name={{deploymentConfig.metadata.name}}\">Attach storage</a>\n" +
    "<span ng-if=\"!('deploymentconfigs' | canI : 'update')\">none</span>\n" +
    "</p>\n" +
    "<volumes volumes=\"deploymentConfig.spec.template.spec.volumes\" namespace=\"project.metadata.name\"></volumes>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-lg-6\">\n" +
    "<h3>Autoscaling</h3>\n" +
    "\n" +
    "<div ng-repeat=\"warning in hpaWarnings\" class=\"alert alert-warning\">\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" aria-hidden=\"true\"></span>\n" +
    "<span class=\"sr-only\">Warning:</span>\n" +
    "{{warning.message}}\n" +
    "\n" +
    "<a ng-href=\"project/{{projectName}}/set-limits?dcName={{deploymentConfig.metadata.name}}\" ng-if=\"warning.reason === 'NoCPURequest' && 'deploymentconfigs' | canI : 'update'\" role=\"button\">Set resource\n" +
    "<span ng-if=\"!('cpu' | isRequestCalculated : project)\">requests and</span> limits</a>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"!autoscalers.length\">\n" +
    "<a ng-if=\"{resource: 'horizontalpodautoscalers', group: 'extensions'} | canI : 'create'\" ng-href=\"project/{{projectName}}/edit/autoscaler?kind=DeploymentConfig&name={{deploymentConfig.metadata.name}}\" role=\"button\">Add autoscaler</a>\n" +
    "<span ng-if=\"!({resource: 'horizontalpodautoscalers', group: 'extensions'} | canI : 'create')\">Autoscaling is not enabled. There are no autoscalers for this deployment config.</span>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-repeat=\"hpa in autoscalers\">\n" +
    "<h4>{{hpa.metadata.name}}</h4>\n" +
    "<hpa hpa=\"hpa\" project=\"project\" show-scale-target=\"false\" alerts=\"alerts\"></hpa>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"col-lg-6\">\n" +
    "<h3>Triggers</h3>\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<dt>Manual (CLI):\n" +
    "<a href=\"{{'deployment-operations' | helpLink}}\" target=\"_blank\">\n" +
    "<span class=\"learn-more-block\">Learn more <i class=\"fa fa-external-link\"> </i></span>\n" +
    "</a>\n" +
    "</dt>\n" +
    "<dd>\n" +
    "<copy-to-clipboard clipboard-text=\"'oc deploy ' + deploymentConfig.metadata.name + ' --latest -n ' + project.metadata.name\"></copy-to-clipboard>\n" +
    "</dd>\n" +
    "<div ng-repeat=\"trigger in deploymentConfig.spec.triggers\">\n" +
    "<span ng-switch=\"trigger.type\">\n" +
    "<span ng-switch-default>{{trigger.type}}</span>\n" +
    "<span ng-switch-when=\"ImageChange\" ng-if=\"trigger.imageChangeParams.from\">\n" +
    "<dt>New image for:</dt>\n" +
    "<dd>{{trigger.imageChangeParams.from | imageObjectRef : deploymentConfig.metadata.namespace}}</dd>\n" +
    "</span>\n" +
    "<span ng-switch-when=\"ConfigChange\">\n" +
    "<dt>Change of:</dt>\n" +
    "<dd>Config</dd>\n" +
    "</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "</dl>\n" +
    "</div>\n" +
    "</div>\n" +
    "<annotations annotations=\"deploymentConfig.metadata.annotations\"></annotations>\n" +
    "</div>\n" +
    "<div ng-if=\"loaded\">\n" +
    "<div class=\"table-filter-wrapper\">\n" +
    "<project-filter></project-filter>\n" +
    "</div>\n" +
    "<table class=\"table table-bordered table-hover table-mobile\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Deployment</th>\n" +
    "<th>Status</th>\n" +
    "<th>Created</th>\n" +
    "<th>Trigger</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody ng-if=\"(deployments | hashSize) == 0\">\n" +
    "<tr><td colspan=\"4\"><em>{{emptyMessage}}</em></td></tr>\n" +
    "</tbody>\n" +
    "<tbody ng-repeat=\"deployment in deployments | orderObjectsByDate : true\">\n" +
    "<tr>\n" +
    "<td data-title=\"Deployment\">\n" +
    "\n" +
    "<span ng-if=\"deployment | annotation : 'deploymentVersion'\">\n" +
    "<a ng-href=\"{{deployment | navigateResourceURL}}\">#{{deployment | annotation : 'deploymentVersion'}}</a>\n" +
    "<span ng-if=\"deploymentConfig.status.latestVersion == (deployment | annotation : 'deploymentVersion')\">(latest)</span>\n" +
    "</span>\n" +
    "</td>\n" +
    "<td data-title=\"Status\">\n" +
    "<div row class=\"status\">\n" +
    "<status-icon status=\"deployment | deploymentStatus\" disable-animation fixed-width=\"true\"></status-icon>\n" +
    "<span flex>\n" +
    "{{deployment | deploymentStatus}}<span ng-if=\"(deployment | deploymentStatus) == 'Active' || (deployment | deploymentStatus) == 'Running'\">,\n" +
    "<span ng-if=\"deployment.spec.replicas !== deployment.status.replicas\">{{deployment.status.replicas}}/</span>{{deployment.spec.replicas}} replica<span ng-if=\"deployment.spec.replicas != 1\">s</span></span>\n" +
    "</span>\n" +
    "\n" +
    "</div>\n" +
    "</td>\n" +
    "<td data-title=\"Created\">\n" +
    "<relative-timestamp timestamp=\"deployment.metadata.creationTimestamp\"></relative-timestamp>\n" +
    "</td>\n" +
    "<td data-title=\"Trigger\">\n" +
    "<span ng-if=\"!deployment.causes.length\">Unknown</span>\n" +
    "<span ng-if=\"deployment.causes.length\">\n" +
    "<span ng-repeat=\"cause in deployment.causes\">\n" +
    "<span ng-switch=\"cause.type\">\n" +
    "<span ng-switch-when=\"ImageChange\">\n" +
    "<span ng-if=\"cause.imageTrigger.from\">\n" +
    "<abbr title=\"{{cause.imageTrigger.from | imageObjectRef : null : true}}\">Image</abbr> change\n" +
    "</span>\n" +
    "</span>\n" +
    "<span ng-switch-when=\"ConfigChange\">Config change</span>\n" +
    "<span ng-switch-default>{{cause.type}}</span>\n" +
    "</span>\n" +
    "</span>\n" +
    "</span>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</uib-tab>\n" +
    "<uib-tab heading=\"Environment\" active=\"selectedTab.environment\" ng-if=\"deploymentConfig\">\n" +
    "<uib-tab-heading>Environment</uib-tab-heading>\n" +
    "<ng-form name=\"forms.dcEnvVars\">\n" +
    "<div ng-repeat=\"container in updatedDeploymentConfig.spec.template.spec.containers\">\n" +
    "<h3>Container {{container.name}} Environment Variables</h3>\n" +
    "<key-value-editor ng-if=\"!('deploymentconfigs' | canI : 'update')\" entries=\"container.env\" key-placeholder=\"Name\" value-placeholder=\"Value\" cannot-add cannot-sort cannot-delete is-readonly show-header></key-value-editor>\n" +
    "<key-value-editor ng-if=\"'deploymentconfigs' | canI : 'update'\" entries=\"container.env\" key-placeholder=\"Name\" value-placeholder=\"Value\" key-validator=\"[A-Za-z_][A-Za-z0-9_]*\" key-validator-error=\"Please enter a valid key\" key-validator-error-tooltip=\"A valid environment variable name is an alphanumeric (a-z and 0-9) string beginning with a letter that may contain underscores.\" add-row-link=\"Add environment variable\" show-header></key-value-editor>\n" +
    "</div>\n" +
    "<button class=\"btn btn-default\" ng-if=\"'deploymentconfigs' | canI : 'update'\" ng-click=\"saveEnvVars()\" ng-disabled=\"forms.dcEnvVars.$pristine || forms.dcEnvVars.$invalid\">Save</button>\n" +
    "<a ng-if=\"!forms.dcEnvVars.$pristine\" href=\"\" ng-click=\"clearEnvVarUpdates()\" class=\"mar-left-sm\" style=\"vertical-align: -2px\">Clear changes</a>\n" +
    "</ng-form>\n" +
    "</uib-tab>\n" +
    "<uib-tab active=\"selectedTab.events\" ng-if=\"'events' | canI : 'watch'\">\n" +
    "<uib-tab-heading>Events</uib-tab-heading>\n" +
    "<events resource-kind=\"DeploymentConfig\" resource-name=\"{{deploymentConfig.metadata.name}}\" project-context=\"projectContext\" ng-if=\"selectedTab.events\"></events>\n" +
    "</uib-tab>\n" +
    "</uib-tabset>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/browse/deployment.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div>\n" +
    "<h1>\n" +
    "{{name}}\n" +
    "<div class=\"pull-right dropdown\" ng-if=\"deployment\" ng-hide=\"!('deployments' | canIDoAny)\">\n" +
    "<button type=\"button\" class=\"dropdown-toggle btn btn-default actions-dropdown-btn hidden-xs\" data-toggle=\"dropdown\">\n" +
    "Actions\n" +
    "<span class=\"caret\" aria-hidden=\"true\"></span>\n" +
    "</button>\n" +
    "<a href=\"\" class=\"dropdown-toggle actions-dropdown-kebab visible-xs-inline\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v\"></i><span class=\"sr-only\">Actions</span></a>\n" +
    "<ul class=\"dropdown-menu actions action-button\">\n" +
    "<li ng-if=\"{ group: 'extensions', resource: 'deployments' } | canI : 'update'\">\n" +
    "<a ng-href=\"project/{{project.metadata.name}}/attach-pvc?kind=Deployment&name={{deployment.metadata.name}}&group=extensions\" role=\"button\">Attach Storage</a>\n" +
    "</li>\n" +
    "<li ng-if=\"{ group: 'extensions', resource: 'deployments' } | canI : 'update'\">\n" +
    "<a ng-href=\"project/{{projectName}}/set-limits?kind=Deployment&name={{deployment.metadata.name}}&group=extensions\" role=\"button\">Set Resource Limits</a>\n" +
    "</li>\n" +
    "<li ng-if=\"!autoscalers.length && ({resource: 'horizontalpodautoscalers', group: 'extensions'} | canI : 'create')\">\n" +
    "\n" +
    "<a ng-href=\"project/{{projectName}}/edit/autoscaler?kind=Deployment&name={{deployment.metadata.name}}&group=extensions\" role=\"button\">Add Autoscaler</a>\n" +
    "</li>\n" +
    "<li ng-if=\"autoscalers.length === 1 && ({resource: 'horizontalpodautoscalers', group: 'extensions'} | canI : 'update')\">\n" +
    "\n" +
    "<a ng-href=\"project/{{projectName}}/edit/autoscaler?kind=HorizontalPodAutoscaler&group=extensions&name={{autoscalers[0].metadata.name}}\" role=\"button\">Edit Autoscaler</a>\n" +
    "</li>\n" +
    "<li ng-if=\"{ group: 'extensions', resource: 'deployments' } | canI : 'update'\">\n" +
    "<a ng-href=\"{{healthCheckURL}}\" role=\"button\">Edit Health Checks</a>\n" +
    "</li>\n" +
    "<li ng-if=\"{ group: 'extensions', resource: 'deployments' } | canI : 'update'\">\n" +
    "<a ng-href=\"{{deployment | editYamlURL}}\" role=\"button\">Edit YAML</a>\n" +
    "</li>\n" +
    "<li ng-if=\"{ group: 'extensions', resource: 'deployments' } | canI : 'delete'\">\n" +
    "<delete-link kind=\"Deployment\" resource-name=\"{{deployment.metadata.name}}\" project-name=\"{{deployment.metadata.namespace}}\" alerts=\"alerts\" hpa-list=\"autoscalers\">\n" +
    "</delete-link>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "<small class=\"meta\" ng-if=\"deployment\">created <relative-timestamp timestamp=\"deployment.metadata.creationTimestamp\"></relative-timestamp></small>\n" +
    "</h1>\n" +
    "<labels labels=\"deployment.metadata.labels\" clickable=\"true\" kind=\"deployments\" project-name=\"{{deployment.metadata.namespace}}\" limit=\"3\"></labels>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\" persist-tab-state>\n" +
    "<div class=\"container-fluid\">\n" +
    "<div ng-if=\"!loaded\">Loading...</div>\n" +
    "<div class=\"row\" ng-if=\"loaded\">\n" +
    "<div class=\"col-md-12\" ng-class=\"{ 'hide-tabs' : !deployment }\">\n" +
    "<uib-tabset>\n" +
    "<uib-tab active=\"selectedTab.details\">\n" +
    "<uib-tab-heading>Details</uib-tab-heading>\n" +
    "<div class=\"resource-details\" ng-if=\"deployment\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-lg-6\">\n" +
    "<h3>Status</h3>\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<dt>Last Version:</dt>\n" +
    "<dd>{{deployment | lastDeploymentRevision}}</dd>\n" +
    "<dt>Replicas:</dt>\n" +
    "<dd>\n" +
    "<replicas spec=\"deployment.spec.replicas\" disable-scaling=\"autoscalers.length\" scale-fn=\"scale(replicas)\" deployment=\"deployment\"></replicas>\n" +
    "<span ng-if=\"autoscalers.length\">(autoscaled)</span>\n" +
    "<div ng-if=\"deployment.status.updatedReplicas\">\n" +
    "{{deployment.status.updatedReplicas}} up to date\n" +
    "</div>\n" +
    "<div ng-if=\"deployment.status.availableReplicas || deployment.status.unavailableReplicas\">\n" +
    "<span ng-if=\"deployment.status.availableReplicas\">{{deployment.status.availableReplicas}} available<span ng-if=\"deployment.status.unavailableReplicas\">,</span></span>\n" +
    "<span ng-if=\"deployment.status.unavailableReplicas\">{{deployment.status.unavailableReplicas}} unavailable</span>\n" +
    "</div>\n" +
    "</dd>\n" +
    "<dt>Paused:</dt>\n" +
    "<dd>{{deployment.spec.paused | yesNo}}</dd>\n" +
    "</dl>\n" +
    "</div>\n" +
    "<div class=\"col-lg-6\">\n" +
    "<h3>Configuration</h3>\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<dt>Selectors:</dt>\n" +
    "<dd>\n" +
    "<selector selector=\"deployment.spec.selector\"></selector>\n" +
    "</dd>\n" +
    "<dt>Strategy:</dt>\n" +
    "<dd>{{deployment.spec.strategy.type | sentenceCase}}</dd>\n" +
    "<dt ng-if-start=\"deployment.spec.strategy.rollingUpdate\">\n" +
    "Max Unavailable:\n" +
    "<span data-toggle=\"tooltip\" title=\"The maximum number of pods that can be unavailable during the update process.\" class=\"pficon pficon-help text-muted small\"></span>\n" +
    "</dt>\n" +
    "<dd>\n" +
    "<span ng-if=\"deployment.spec.strategy.rollingUpdate.maxUnavailable | isNil\">1</span>\n" +
    "<span ng-if=\"!(deployment.spec.strategy.rollingUpdate.maxUnavailable | isNil)\">\n" +
    "{{deployment.spec.strategy.rollingUpdate.maxUnavailable}}\n" +
    "</span>\n" +
    "</dd>\n" +
    "<dt>\n" +
    "Max Surge:\n" +
    "<span data-toggle=\"tooltip\" title=\"The maximum number of pods that can be created above the desired number of pods.\" class=\"pficon pficon-help text-muted small\"></span>\n" +
    "</dt>\n" +
    "<dd ng-if-end>\n" +
    "<span ng-if=\"deployment.spec.strategy.rollingUpdate.maxSurge | isNil\">1</span>\n" +
    "<span ng-if=\"!(deployment.spec.strategy.rollingUpdate.maxSurge | isNil)\">\n" +
    "{{deployment.spec.strategy.rollingUpdate.maxSurge}}\n" +
    "</span>\n" +
    "</dd>\n" +
    "<dt>\n" +
    "Min Ready:\n" +
    "<span data-toggle=\"tooltip\" title=\"The minimum number of seconds a new pod must be ready before it is considered available.\" class=\"pficon pficon-help text-muted small\"></span>\n" +
    "</dt>\n" +
    "<dd>\n" +
    "{{deployment.spec.minReadySeconds || 0}} sec\n" +
    "</dd>\n" +
    "</dl>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-lg-6\">\n" +
    "<h3>Template</h3>\n" +
    "<pod-template pod-template=\"deployment.spec.template\" images-by-docker-reference=\"imagesByDockerReference\" builds=\"builds\" detailed=\"true\" add-health-check-url=\"{{ ({ group: 'extensions', resource: 'deployments' } | canI : 'update') ? healthCheckURL : '' }}\">\n" +
    "</pod-template>\n" +
    "<h4>Volumes</h4>\n" +
    "<p ng-if=\"!deployment.spec.template.spec.volumes.length\">\n" +
    "<a ng-if=\"'deploymentconfigs' | canI : 'update'\" ng-href=\"project/{{project.metadata.name}}/attach-pvc?kind=Deployment&name={{deployment.metadata.name}}&group=extensions\">Attach storage</a>\n" +
    "<span ng-if=\"!('deploymentconfigs' | canI : 'update')\">none</span>\n" +
    "</p>\n" +
    "<volumes volumes=\"deployment.spec.template.spec.volumes\" namespace=\"project.metadata.name\"></volumes>\n" +
    "</div>\n" +
    "<div class=\"col-lg-6\">\n" +
    "<h3>Autoscaling</h3>\n" +
    "\n" +
    "<div ng-repeat=\"warning in hpaWarnings\" class=\"alert alert-warning\">\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" aria-hidden=\"true\"></span>\n" +
    "<span class=\"sr-only\">Warning:</span>\n" +
    "{{warning.message}}\n" +
    "\n" +
    "<a ng-href=\"project/{{projectName}}/set-limits?kind=Deployment&name={{deployment.metadata.name}}&group=extensions\" ng-if=\"warning.reason === 'NoCPURequest' && ({ group: 'extensions', resource: 'deployments' } | canI : 'update')\" role=\"button\">Set resource\n" +
    "<span ng-if=\"!('cpu' | isRequestCalculated : project)\">requests and</span> limits</a>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"!autoscalers.length\">\n" +
    "<a ng-if=\"{resource: 'horizontalpodautoscalers', group: 'extensions'} | canI : 'create'\" ng-href=\"project/{{projectName}}/edit/autoscaler?kind=Deployment&name={{deployment.metadata.name}}&group=extensions\" role=\"button\">Add autoscaler</a>\n" +
    "<span ng-if=\"!({resource: 'horizontalpodautoscalers', group: 'extensions'} | canI : 'create')\">none</span>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-repeat=\"hpa in autoscalers\">\n" +
    "<h4>{{hpa.metadata.name}}</h4>\n" +
    "<hpa hpa=\"hpa\" project=\"project\" show-scale-target=\"false\" alerts=\"alerts\"></hpa>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"replicaSetsForDeployment | hashSize\">\n" +
    "<h3>Replica Sets</h3>\n" +
    "<table class=\"table table-bordered table-hover table-mobile\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Version</th>\n" +
    "<th>Name</th>\n" +
    "<th>Replicas</th>\n" +
    "<th>Created</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody ng-repeat=\"replicaSet in replicaSetsForDeployment\">\n" +
    "<tr>\n" +
    "<td data-title=\"Version\">\n" +
    "#{{replicaSet | annotation : 'deployment.kubernetes.io/revision'}}\n" +
    "</td>\n" +
    "<td data-title=\"Name\">\n" +
    "<a ng-href=\"{{replicaSet | navigateResourceURL}}\">{{replicaSet.metadata.name}}</a>\n" +
    "</td>\n" +
    "<td data-title=\"Replicas\">\n" +
    "<span ng-if=\"replicaSet.status.replicas !== replicaSet.spec.replicas\">{{replicaSet.status.replicas}}/</span>{{replicaSet.spec.replicas}} replica<span ng-if=\"replicaSet.spec.replicas != 1\">s</span>\n" +
    "</td>\n" +
    "<td data-title=\"Created\">\n" +
    "<relative-timestamp timestamp=\"replicaSet.metadata.creationTimestamp\"></relative-timestamp>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "<annotations annotations=\"deployment.metadata.annotations\"></annotations>\n" +
    "</div>\n" +
    "</uib-tab>\n" +
    "<uib-tab heading=\"Environment\" active=\"selectedTab.environment\" ng-if=\"deployment\">\n" +
    "<uib-tab-heading>Environment</uib-tab-heading>\n" +
    "<ng-form name=\"forms.deploymentEnvVars\">\n" +
    "<div ng-repeat=\"container in updatedDeployment.spec.template.spec.containers\">\n" +
    "<h3>Container {{container.name}} Environment Variables</h3>\n" +
    "<key-value-editor ng-if=\"!({ group: 'extensions', resource: 'deployments' } | canI : 'update')\" entries=\"container.env\" key-placeholder=\"Name\" value-placeholder=\"Value\" cannot-add cannot-sort cannot-delete is-readonly show-header></key-value-editor>\n" +
    "<key-value-editor ng-if=\"{ group: 'extensions', resource: 'deployments' } | canI : 'update'\" entries=\"container.env\" key-placeholder=\"Name\" value-placeholder=\"Value\" key-validator=\"[A-Za-z_][A-Za-z0-9_]*\" key-validator-error=\"Please enter a valid key\" key-validator-error-tooltip=\"A valid environment variable name is an alphanumeric (a-z and 0-9) string beginning with a letter that may contain underscores.\" add-row-link=\"Add environment variable\" show-header></key-value-editor>\n" +
    "</div>\n" +
    "<button class=\"btn btn-default\" ng-if=\"{ group: 'extensions', resource: 'deployments' } | canI : 'update'\" ng-click=\"saveEnvVars()\" ng-disabled=\"forms.deploymentEnvVars.$pristine || forms.deploymentEnvVars.$invalid\">Save</button>\n" +
    "<a ng-if=\"!forms.deploymentEnvVars.$pristine\" href=\"\" ng-click=\"clearEnvVarUpdates()\" class=\"mar-left-sm\" style=\"vertical-align: -2px\">Clear changes</a>\n" +
    "</ng-form>\n" +
    "</uib-tab>\n" +
    "<uib-tab active=\"selectedTab.events\" ng-if=\"'events' | canI : 'watch'\">\n" +
    "<uib-tab-heading>Events</uib-tab-heading>\n" +
    "<events resource-kind=\"Deployment\" resource-name=\"{{deployment.metadata.name}}\" project-context=\"projectContext\" ng-if=\"selectedTab.events\"></events>\n" +
    "</uib-tab>\n" +
    "</uib-tabset>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/browse/image.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"!imageStream\" class=\"mar-top-xl\">Loading...</div>\n" +
    "<div ng-if=\"imageStream\">\n" +
    "<h1>\n" +
    "{{imageStream.metadata.name}}:{{tagName}}\n" +
    "</h1>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content gutter-top\" persist-tab-state>\n" +
    "<div class=\"container-fluid\">\n" +
    "<div ng-if=\"imageStream && !image\">Loading...</div>\n" +
    "<div class=\"row\" ng-if=\"image\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<registry-image-pull settings=\"settings\" names=\"[ imageStream.metadata.name + ':' + tagName ]\">\n" +
    "</registry-image-pull>\n" +
    "<uib-tabset>\n" +
    "<uib-tab heading=\"Details\" active=\"selectedTab.body\">\n" +
    "<uib-tab-heading>Details</uib-tab-heading>\n" +
    "<registry-image-body image=\"image\">\n" +
    "</registry-image-body>\n" +
    "<registry-image-meta image=\"image\">\n" +
    "</registry-image-meta>\n" +
    "</uib-tab>\n" +
    "<uib-tab heading=\"Config\" active=\"selectedTab.config\">\n" +
    "<uib-tab-heading>Config</uib-tab-heading>\n" +
    "<registry-image-config image=\"image\">\n" +
    "</registry-image-config>\n" +
    "</uib-tab>\n" +
    "<uib-tab heading=\"Layers\" active=\"selectedTab.meta\">\n" +
    "<uib-tab-heading>Layers</uib-tab-heading>\n" +
    "<div ng-if=\"!layers.length\"><em>No layer information is available for this image.</em></div>\n" +
    "<registry-image-layers layers=\"layers\" ng-if=\"layers.length\">\n" +
    "</registry-image-layers>\n" +
    "</uib-tab>\n" +
    "</uib-tabset>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/browse/imagestream.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"!imageStream\" class=\"mar-top-xl\">Loading...</div>\n" +
    "<div ng-if=\"imageStream\">\n" +
    "<h1>\n" +
    "{{imageStream.metadata.name}}\n" +
    "<div class=\"pull-right dropdown\" ng-hide=\"!('imageStreams' | canIDoAny)\">\n" +
    "<button type=\"button\" class=\"dropdown-toggle btn btn-default actions-dropdown-btn hidden-xs\" data-toggle=\"dropdown\">\n" +
    "Actions\n" +
    "<span class=\"caret\" aria-hidden=\"true\"></span>\n" +
    "</button>\n" +
    "<a href=\"\" class=\"dropdown-toggle actions-dropdown-kebab visible-xs-inline\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v\"></i><span class=\"sr-only\">Actions</span></a>\n" +
    "<ul class=\"dropdown-menu actions action-button\">\n" +
    "<li ng-if=\"'imagestreams' | canI : 'update'\">\n" +
    "<a ng-href=\"{{imageStream | editYamlURL}}\" role=\"button\">Edit YAML</a>\n" +
    "</li>\n" +
    "<li ng-if=\"'imagestreams' | canI : 'delete'\">\n" +
    "<delete-link kind=\"ImageStream\" resource-name=\"{{imageStream.metadata.name}}\" project-name=\"{{imageStream.metadata.namespace}}\" alerts=\"alerts\">\n" +
    "</delete-link>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "<small class=\"meta\">created <relative-timestamp timestamp=\"imageStream.metadata.creationTimestamp\"></relative-timestamp></small>\n" +
    "</h1>\n" +
    "<labels labels=\"imageStream.metadata.labels\" clickable=\"true\" kind=\"images\" project-name=\"{{imageStream.metadata.namespace}}\" limit=\"3\"></labels>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content gutter-top\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\" ng-if=\"imageStream\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<div class=\"resource-details\">\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<dt ng-if-start=\"imageStream.spec.dockerImageRepository\">Follows docker repo:</dt>\n" +
    "<dd ng-if-end>{{imageStream.spec.dockerImageRepository}}</dd>\n" +
    "<dt>Docker pull spec:</dt>\n" +
    "<dd>{{imageStream.status.dockerImageRepository}}</dd>\n" +
    "</dl>\n" +
    "<annotations annotations=\"imageStream.metadata.annotations\"></annotations>\n" +
    "</div>\n" +
    "<table class=\"table table-bordered table-hover table-mobile\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Tag</th>\n" +
    "<th>From</th>\n" +
    "<th>Latest Image</th>\n" +
    "<th>Created</th>\n" +
    "<th>Pull Spec</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody ng-if=\"(tagsByName | hashSize) == 0\">\n" +
    "<tr><td colspan=\"5\"><em>{{emptyMessage}}</em></td></tr>\n" +
    "</tbody>\n" +
    "<tbody ng-repeat-start=\"tag in tagsByName | orderBy : 'name'\">\n" +
    "<tr>\n" +
    "<td data-title=\"Tag\"><a href=\"{{imageStream | navigateResourceURL}}/{{tag.name}}\">{{tag.name}}</a></td>\n" +
    "<td data-title=\"From\">\n" +
    "\n" +
    "<div style=\"max-width: 400px\" class=\"truncate\">\n" +
    "<span ng-if=\"!tag.spec.from\"><em>pushed</em></span>\n" +
    "<span ng-if=\"tag.spec.from\">\n" +
    "<span ng-if=\"!tag.spec.from._imageStreamName\">\n" +
    "{{tag.spec.from.name}}\n" +
    "</span>\n" +
    "<span ng-if=\"tag.spec.from._imageStreamName\">\n" +
    "<span ng-if=\"tag.spec.from._imageStreamName === imageStream.metadata.name\">{{tag.spec.from._completeName}}</span>\n" +
    "<span ng-if=\"tag.spec.from._imageStreamName !== imageStream.metadata.name\">\n" +
    "<a ng-href=\"{{tag.spec.from._imageStreamName | navigateResourceURL : 'ImageStream' : (tag.spec.from.namespace || imageStream.metadata.namespace)}}\"><span ng-if=\"tag.spec.from.namespace && tag.spec.from.namespace !== imageStream.metadata.namespace\">{{tag.spec.from.namespace}}/</span>{{tag.spec.from._imageStreamName}}</a>{{tag.spec.from._nameConnector}}{{tag.spec.from._idOrTag}}\n" +
    "</span>\n" +
    "</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "</td>\n" +
    "<td data-title=\"Latest Image\">\n" +
    "<div ng-if=\"!tag.status\">\n" +
    "<div ng-if=\"imageStream | annotation : 'openshift.io/image.dockerRepositoryCheck'\">\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" style=\"margin-right: 5px\" ng-attr-title=\"{{imageStream | annotation : 'openshift.io/image.dockerRepositoryCheck'}}\"></span>\n" +
    "<span>Unable to resolve</span>\n" +
    "</div>\n" +
    "<div ng-if=\"!(imageStream | annotation : 'openshift.io/image.dockerRepositoryCheck')\">\n" +
    "<span ng-if=\"!tag.spec.from\">Not yet synced</span>\n" +
    "\n" +
    "<span ng-if=\"tag.spec.from\">Unresolved</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"tag.status\">\n" +
    "<span ng-if=\"tag.status.items.length && tag.status.items[0].image\" class=\"nowrap\">\n" +
    "<short-id id=\"{{tag.status.items[0].image | imageName}}\"></short-id>\n" +
    "<a href=\"\" ng-if=\"tag.status.items.length > 1\" ng-click=\"tagShowOlder[tag.name] = !tagShowOlder[tag.name]\" ng-attr-title=\"{{tagShowOlder[tag.name] ? 'Hide older images' : 'Show older images'}}\"><span class=\"fa fa-clock-o\"></span><span class=\"fa fa-caret-up\" ng-if=\"tagShowOlder[tag.name]\" style=\"margin-left: 3px\"></span></a>\n" +
    "</span>\n" +
    "<span ng-if=\"!tag.status.items.length\"><em>none</em></span>\n" +
    "</div>\n" +
    "</td>\n" +
    "<td data-title=\"Created\">\n" +
    "<span ng-if=\"tag.status.items.length && tag.status.items[0].image\">\n" +
    "<relative-timestamp timestamp=\"tag.status.items[0].created\"></relative-timestamp>\n" +
    "</span>\n" +
    "</td>\n" +
    "<td data-title=\"Pull Spec\">\n" +
    "\n" +
    "<div ng-if=\"tag.status.items.length && tag.status.items[0].dockerImageReference\">\n" +
    "<div ng-attr-title=\"{{tag.status.items[0].dockerImageReference}}\" class=\"word-break visible-xs-block\">\n" +
    "{{tag.status.items[0].dockerImageReference}}\n" +
    "</div>\n" +
    "<div class=\"pull-spec truncate hidden-xs\" ng-attr-title=\"{{tag.status.items[0].dockerImageReference}}\">\n" +
    "{{tag.status.items[0].dockerImageReference}}\n" +
    "</div>\n" +
    "</div>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "<tbody ng-repeat=\"item in tag.status.items\" ng-if=\"tagShowOlder[tag.name] && !$first && item.image\">\n" +
    "<tr>\n" +
    "<td data-title=\"Tag\"><span class=\"hidden-xs\">&nbsp;</span><span class=\"visible-xs\">{{tag.name}}</span></td>\n" +
    "<td class=\"hidden-xs\">&nbsp;</td>\n" +
    "<td data-title=\"Older Image\">\n" +
    "<short-id id=\"{{item.image | imageName}}\"></short-id>\n" +
    "</td>\n" +
    "<td data-title=\"Created\">\n" +
    "<relative-timestamp timestamp=\"item.created\"></relative-timestamp>\n" +
    "</td>\n" +
    "<td data-title=\"Pull Spec\">\n" +
    "<div ng-if=\"item.dockerImageReference\">\n" +
    "<div ng-attr-title=\"{{item.dockerImageReference}}\" class=\"word-break visible-xs-block\">\n" +
    "{{item.dockerImageReference}}\n" +
    "</div>\n" +
    "<div class=\"pull-spec truncate hidden-xs\" ng-attr-title=\"{{item.dockerImageReference}}\">\n" +
    "{{item.dockerImageReference}}\n" +
    "</div>\n" +
    "</div>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "<tbody ng-repeat-end style=\"display: none\"></tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/browse/persistent-volume-claim.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"!loaded\">Loading...</div>\n" +
    "<div ng-if=\"pvc\">\n" +
    "<h1>\n" +
    "{{pvc.metadata.name}}\n" +
    "<small class=\"meta\" ng-if=\"!pvc.spec.volumeName\">\n" +
    "<span ng-if=\"pvc.spec.resources.requests['storage']\">\n" +
    "waiting for {{pvc.spec.resources.requests['storage'] | usageWithUnits: 'storage'}} allocation,\n" +
    "</span>\n" +
    "<span ng-if=\"!pvc.spec.resources.requests['storage']\">waiting for allocation,</span>\n" +
    "</small>\n" +
    "<small class=\"meta\">created <relative-timestamp timestamp=\"pvc.metadata.creationTimestamp\"></relative-timestamp></small>\n" +
    "<div class=\"pull-right dropdown\" ng-hide=\"!('persistentVolumeClaims' | canIDoAny)\">\n" +
    "<button type=\"button\" class=\"dropdown-toggle btn btn-default actions-dropdown-btn hidden-xs\" data-toggle=\"dropdown\">\n" +
    "Actions\n" +
    "<span class=\"caret\" aria-hidden=\"true\"></span>\n" +
    "</button>\n" +
    "<a href=\"\" class=\"dropdown-toggle actions-dropdown-kebab visible-xs-inline\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v\"></i><span class=\"sr-only\">Actions</span></a>\n" +
    "<ul class=\"dropdown-menu actions action-button\">\n" +
    "<li ng-if=\"!pvc.spec.volumeName\">\n" +
    "<a ng-href=\"{{pvc | editYamlURL}}\" role=\"button\">Edit YAML</a>\n" +
    "</li>\n" +
    "<li>\n" +
    "<delete-link ng-if=\"'persistentvolumeclaims' | canI : 'delete'\" kind=\"PersistentVolumeClaim\" resource-name=\"{{pvc.metadata.name}}\" project-name=\"{{pvc.metadata.namespace}}\" alerts=\"alerts\">\n" +
    "</delete-link>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "</h1>\n" +
    "<labels labels=\"pvc.metadata.labels\" clickable=\"true\" kind=\"storage\" project-name=\"{{pvc.metadata.namespace}}\" limit=\"3\"></labels>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\" ng-if=\"pvc\">\n" +
    "<div class=\"col-md-12 gutter-top\">\n" +
    "<div class=\"resource-details\">\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<dt>Status:</dt>\n" +
    "<dd>\n" +
    "<status-icon status=\"pvc.status.phase\" disable-animation></status-icon>\n" +
    "{{pvc.status.phase}}\n" +
    "<span ng-if=\"pvc.spec.volumeName\">to volume <strong>{{pvc.spec.volumeName}}</strong></span>\n" +
    "</dd>\n" +
    "<dt ng-if=\"pvc.spec.volumeName\">Capacity:</dt>\n" +
    "<dd ng-if=\"pvc.spec.volumeName\">\n" +
    "<span ng-if=\"pvc.status.capacity['storage']\">\n" +
    "allocated {{pvc.status.capacity['storage'] | usageWithUnits: 'storage'}}\n" +
    "</span>\n" +
    "<span ng-if=\"!pvc.status.capacity['storage']\">allocated unknown size</span>\n" +
    "</dd>\n" +
    "<dt>Requested Capacity:</dt>\n" +
    "<dd>\n" +
    "<span ng-if=\"pvc.spec.resources.requests['storage']\">\n" +
    "{{pvc.spec.resources.requests['storage'] | usageWithUnits: 'storage'}}\n" +
    "</span>\n" +
    "<span ng-if=\"!pvc.spec.resources.requests['storage']\"><em>none</em></span>\n" +
    "</dd>\n" +
    "<dt>Access Modes:</dt>\n" +
    "<dd>{{pvc.spec.accessModes | accessModes:'long' | join}}</dd>\n" +
    "</dl>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/browse/pod.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"!loaded\" class=\"mar-top-xl\">Loading...</div>\n" +
    "<div ng-if=\"pod\">\n" +
    "<h1>\n" +
    "{{pod.metadata.name}}\n" +
    "<div class=\"pull-right dropdown\" ng-hide=\"!('pods' | canIDoAny)\">\n" +
    "<button type=\"button\" class=\"dropdown-toggle actions-dropdown-btn btn btn-default hidden-xs\" data-toggle=\"dropdown\">\n" +
    "Actions\n" +
    "<span class=\"caret\"></span>\n" +
    "</button>\n" +
    "<a href=\"\" class=\"dropdown-toggle actions-dropdown-kebab visible-xs-inline\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v\"></i><span class=\"sr-only\">Actions</span></a>\n" +
    "<ul class=\"dropdown-menu actions action-button\">\n" +
    "<li ng-if=\"pod | annotation:'deploymentConfig' && 'deploymentconfigs' | canI : 'update'\">\n" +
    "<a ng-href=\"project/{{project.metadata.name}}/attach-pvc?deploymentconfig={{pod | annotation:'deploymentConfig'}}\" role=\"button\">Attach Storage</a>\n" +
    "</li>\n" +
    "<li ng-if=\"'pods' | canI : 'update'\">\n" +
    "<a ng-href=\"{{pod | editYamlURL}}\" role=\"button\">Edit YAML</a>\n" +
    "</li>\n" +
    "<li ng-if=\"'pods' | canI : 'delete'\">\n" +
    "<delete-link kind=\"Pod\" resource-name=\"{{pod.metadata.name}}\" project-name=\"{{pod.metadata.namespace}}\" alerts=\"alerts\">\n" +
    "</delete-link>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "<span ng-if=\"pod | isTroubledPod\">\n" +
    "<pod-warnings pod=\"pod\"></pod-warnings>\n" +
    "</span>\n" +
    "<small class=\"meta\">created <relative-timestamp timestamp=\"pod.metadata.creationTimestamp\"></relative-timestamp></small>\n" +
    "</h1>\n" +
    "<labels labels=\"pod.metadata.labels\" clickable=\"true\" kind=\"pods\" project-name=\"{{pod.metadata.namespace}}\" limit=\"3\"></labels>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\" persist-tab-state>\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\" ng-if=\"pod\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<uib-tabset>\n" +
    "<uib-tab heading=\"Details\" active=\"selectedTab.details\">\n" +
    "<uib-tab-heading>Details</uib-tab-heading>\n" +
    "<ng-include src=\" 'views/browse/_pod-details.html' \"></ng-include>\n" +
    "</uib-tab>\n" +
    "<uib-tab heading=\"Environment\" active=\"selectedTab.environment\">\n" +
    "<uib-tab-heading>Environment</uib-tab-heading>\n" +
    "<div ng-repeat=\"container in pod.spec.containers\">\n" +
    "<h3>Container {{container.name}} Environment Variables</h3>\n" +
    "<key-value-editor entries=\"container.env\" is-readonly cannot-add cannot-sort cannot-delete ng-if=\"container.env.length\"></key-value-editor>\n" +
    "<em ng-if=\"!container.env.length\">The container specification has no environment variables set.</em>\n" +
    "</div>\n" +
    "</uib-tab>\n" +
    "<uib-tab ng-if=\"metricsAvailable\" heading=\"Metrics\" active=\"selectedTab.metrics\">\n" +
    "\n" +
    "<pod-metrics ng-if=\"selectedTab.metrics\" pod=\"pod\">\n" +
    "</pod-metrics>\n" +
    "</uib-tab>\n" +
    "<uib-tab active=\"selectedTab.logs\" ng-if=\"'pods/log' | canI : 'get'\">\n" +
    "<uib-tab-heading>Logs</uib-tab-heading>\n" +
    "<log-viewer ng-if=\"selectedTab.logs\" follow-affix-top=\"390\" follow-affix-bottom=\"90\" resource=\"pods/log\" name=\"pod.metadata.name\" context=\"projectContext\" options=\"logOptions\" empty=\"logEmpty\" run=\"logCanRun\">\n" +
    "<label for=\"selectLogContainer\">Container:</label>\n" +
    "<span ng-if=\"pod.spec.containers.length === 1\">\n" +
    "{{pod.spec.containers[0].name}}\n" +
    "</span>\n" +
    "<select id=\"selectLogContainer\" ng-if=\"pod.spec.containers.length > 1\" ng-model=\"logOptions.container\" ng-options=\"container.name as container.name for container in pod.spec.containers\" ng-init=\"logOptions.container = pod.spec.containers[0].name\">\n" +
    "</select>\n" +
    "<span ng-if=\"containerStateReason || containerStatusKey\">\n" +
    "<span class=\"dash\">&mdash;</span>\n" +
    "<status-icon status=\"containerStateReason || (containerStatusKey | capitalize)\"></status-icon>\n" +
    "<span>{{containerStateReason || containerStatusKey | sentenceCase}}</span>\n" +
    "</span>\n" +
    "<span ng-if=\"containerStartTime && !logEmpty\">\n" +
    "<span class=\"log-timestamps\">Log from {{containerStartTime | date : 'short'}} <span ng-if=\"containerEndTime\">to {{containerEndTime | date : 'short'}}</span></span>\n" +
    "</span>\n" +
    "</log-viewer>\n" +
    "</uib-tab>\n" +
    "<uib-tab active=\"selectedTab.terminal\" select=\"terminalTabWasSelected = true\" ng-init=\"containers = pod.status.containerStatuses\">\n" +
    "<uib-tab-heading>Terminal</uib-tab-heading>\n" +
    "<div ng-if=\"noContainersYet\" class=\"empty-state-message text-center\">\n" +
    "<h2>\n" +
    "No running containers\n" +
    "</h2>\n" +
    "</div>\n" +
    "<div ng-if=\"!noContainersYet\">\n" +
    "<div class=\"mar-bottom-md\">\n" +
    "<span class=\"pficon pficon-info\" aria-hidden=\"true\"></span>\n" +
    "When you navigate away from this pod, any open terminal connections will be closed. This will kill any foreground processes you started from the terminal.\n" +
    "</div>\n" +
    "<alerts ng-if=\"selectedTerminalContainer.status === 'disconnected'\" alerts=\"terminalDisconnectAlert\"></alerts>\n" +
    "<div class=\"mar-left-xl mar-bottom-lg\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"pad-left-none pad-bottom-md col-sm-6 col-lg-4\">\n" +
    "<span ng-if=\"pod.spec.containers.length === 1\">\n" +
    "<label for=\"selectLogContainer\">Container:</label>\n" +
    "{{pod.spec.containers[0].name}}\n" +
    "</span>\n" +
    "<ui-select ng-model=\"selectedTerminalContainer\" on-select=\"onTerminalSelectChange(selectedTerminalContainer)\" ng-if=\"pod.spec.containers.length > 1\" class=\"mar-left-none pad-left-none pad-right-none\">\n" +
    "<ui-select-match class=\"truncate\" placeholder=\"Container Name\">\n" +
    "<span class=\"pad-left-md\">\n" +
    "{{selectedTerminalContainer.containerName}}\n" +
    "</span>\n" +
    "</ui-select-match>\n" +
    "<ui-select-choices repeat=\"term in containerTerminals | filter: $select.search\" ui-disable-choice=\"(term.containerState !== 'running') && !term.isUsed\">\n" +
    "<div row>\n" +
    "<span ng-bind-html=\"term.containerName | highlight: $select.search\">\n" +
    "</span>\n" +
    "<span flex></span>\n" +
    "<span ng-if=\"term.isUsed && (term.containerState === 'running')\" ng-class=\"{'text-muted' : (term.status === 'disconnected')}\">\n" +
    "{{term.status}}\n" +
    "</span>\n" +
    "<span ng-if=\"term.containerState !== 'running'\" ng-class=\"{'text-muted' : !term.isUsed}\">\n" +
    "{{term.containerState}}\n" +
    "</span>\n" +
    "</div>\n" +
    "</ui-select-choices>\n" +
    "</ui-select>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"container-terminal-wrapper\">\n" +
    "<div class=\"row\" ng-repeat=\"term in containerTerminals\">\n" +
    "<div class=\"column\">\n" +
    "<kubernetes-container-terminal prevent=\"!terminalTabWasSelected\" ng-if=\"term.isUsed\" ng-show=\"term.isVisible\" pod=\"pod\" container=\"term.containerName\" status=\"term.status\" rows=\"terminalRows\" cols=\"terminalCols\" autofocus command=\"[&quot;/bin/sh&quot;, &quot;-i&quot;, &quot;-c&quot;, &quot;TERM=xterm /bin/sh&quot;]\">\n" +
    "</kubernetes-container-terminal>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</uib-tab>\n" +
    "<uib-tab active=\"selectedTab.events\" ng-if=\"'events' | canI : 'watch'\">\n" +
    "<uib-tab-heading>Events</uib-tab-heading>\n" +
    "<events resource-kind=\"Pod\" resource-name=\"{{pod.metadata.name}}\" project-context=\"projectContext\" ng-if=\"selectedTab.events\"></events>\n" +
    "</uib-tab>\n" +
    "</uib-tabset>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/browse/replica-set.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"!loaded\" class=\"mar-top-md\">Loading...</div>\n" +
    "<div ng-if=\"deployment\">\n" +
    "<h1>\n" +
    "{{deployment.metadata.name}}\n" +
    "<span ng-if=\"deploymentConfigMissing\" class=\"pficon pficon-warning-triangle-o\" style=\"cursor: help; vertical-align: middle\" data-toggle=\"tooltip\" data-trigger=\"hover\" title=\"The deployment's deployment config is missing.\" aria-hidden=\"true\">\n" +
    "</span>\n" +
    "<span ng-if=\"deploymentConfigMissing\" class=\"sr-only\">Warning: The deployment's deployment config is missing.</span>\n" +
    "<small class=\"meta\">created <relative-timestamp timestamp=\"deployment.metadata.creationTimestamp\"></relative-timestamp></small>\n" +
    "\n" +
    "<ng-include ng-if=\"kind === 'ReplicaSet'\" src=\" 'views/browse/_replica-set-actions.html' \">\n" +
    "</ng-include>\n" +
    "<ng-include ng-if=\"kind === 'ReplicationController'\" src=\" 'views/browse/_replication-controller-actions.html' \">\n" +
    "</ng-include>\n" +
    "</h1>\n" +
    "<labels ng-if=\"deploymentConfigName\" labels=\"deployment.metadata.labels\" clickable=\"true\" kind=\"deployments\" title-kind=\"deployments for deployment config {{deploymentConfigName}}\" project-name=\"{{deployment.metadata.namespace}}\" limit=\"3\" navigate-url=\"{{deployment | configURLForResource}}\"></labels>\n" +
    "<labels ng-if=\"!deploymentConfigName\" labels=\"deployment.metadata.labels\" clickable=\"true\" kind=\"deployments\" project-name=\"{{deployment.metadata.namespace}}\" limit=\"3\"></labels>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\" persist-tab-state>\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\" ng-if=\"deployment\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<uib-tabset>\n" +
    "<uib-tab active=\"selectedTab.details\">\n" +
    "<uib-tab-heading>Details</uib-tab-heading>\n" +
    "<div class=\"resource-details\">\n" +
    "<ng-include src=\" 'views/browse/_replica-set-details.html' \"></ng-include>\n" +
    "</div>\n" +
    "</uib-tab>\n" +
    "<uib-tab heading=\"Environment\" active=\"selectedTab.environment\">\n" +
    "<uib-tab-heading>Environment</uib-tab-heading>\n" +
    "<div ng-if=\"deployment | hasDeploymentConfig\">\n" +
    "<p ng-if=\"'deploymentconfigs' | canI : 'update'\">\n" +
    "<span class=\"pficon pficon-info\" aria-hidden=\"true\"></span>\n" +
    "Environment variables can be edited on the <a ng-href=\"{{deployment | configURLForResource}}?tab=environment\">deployment configuration</a>.\n" +
    "</p>\n" +
    "<div ng-repeat=\"container in deployment.spec.template.spec.containers\">\n" +
    "<h3>Container {{container.name}} Environment Variables</h3>\n" +
    "<key-value-editor ng-if=\"container.env.length\" entries=\"container.env\" key-placeholder=\"Name\" value-placeholder=\"Value\" cannot-add cannot-delete cannot-sort is-readonly show-header></key-value-editor>\n" +
    "<em ng-if=\"!container.env.length\">The container specification has no environment variables set.</em>\n" +
    "</div>\n" +
    "</div>\n" +
    "<ng-form ng-show=\"!(deployment | hasDeploymentConfig)\" name=\"forms.envForm\">\n" +
    "<div ng-repeat=\"container in updatedDeployment.spec.template.spec.containers\">\n" +
    "<div ng-if=\"resource | canI : 'update'\">\n" +
    "<key-value-editor entries=\"container.env\" key-placeholder=\"Name\" value-placeholder=\"Value\" key-validator=\"[A-Za-z_][A-Za-z0-9_]*\" key-validator-error=\"Please enter a valid key\" key-validator-error-tooltip=\"A valid environment variable name is an alphanumeric (a-z and 0-9) string beginning with a letter that may contain underscores.\" add-row-link=\"Add environment variable\" show-header></key-value-editor>\n" +
    "<button class=\"btn btn-default\" ng-click=\"saveEnvVars()\" ng-disabled=\"forms.envForm.$pristine || forms.envForm.$invalid\">Save</button>\n" +
    "<a ng-if=\"!forms.envForm.$pristine\" href=\"\" ng-click=\"clearEnvVarUpdates()\" class=\"mar-left-sm\" style=\"vertical-align: -2px\">Clear changes</a>\n" +
    "</div>\n" +
    "<div ng-if=\"!(resource | canI : 'update')\">\n" +
    "<key-value-editor ng-if=\"container.env.length\" entries=\"container.env\" key-placeholder=\"Name\" value-placeholder=\"Value\" cannot-add cannot-delete cannot-sort is-readonly show-header></key-value-editor>\n" +
    "<em ng-if=\"!container.env.length\">The container specification has no environment variables set.</em>\n" +
    "</div>\n" +
    "</div>\n" +
    "</ng-form>\n" +
    "</uib-tab>\n" +
    "<uib-tab ng-if=\"metricsAvailable\" heading=\"Metrics\" active=\"selectedTab.metrics\">\n" +
    "\n" +
    "<deployment-metrics ng-if=\"selectedTab.metrics && podsForDeployment\" pods=\"podsForDeployment\" containers=\"deployment.spec.template.spec.containers\">\n" +
    "</deployment-metrics>\n" +
    "</uib-tab>\n" +
    "<uib-tab ng-if=\"deploymentConfigName && logOptions.version && ('deploymentconfigs/log' | canI : 'get')\" active=\"selectedTab.logs\">\n" +
    "<uib-tab-heading>Logs</uib-tab-heading>\n" +
    "<log-viewer ng-if=\"selectedTab.logs\" follow-affix-top=\"390\" follow-affix-bottom=\"90\" resource=\"deploymentconfigs/log\" name=\"deploymentConfigName\" context=\"projectContext\" options=\"logOptions\" empty=\"logEmpty\" run=\"logCanRun\">\n" +
    "<span ng-if=\"deployment | deploymentStatus\">\n" +
    "<label>Status:</label>\n" +
    "<status-icon status=\"deployment | deploymentStatus\"></status-icon>\n" +
    "{{deployment | deploymentStatus}}\n" +
    "</span>\n" +
    "</log-viewer>\n" +
    "</uib-tab>\n" +
    "<uib-tab active=\"selectedTab.events\" ng-if=\"'events' | canI : 'watch'\">\n" +
    "<uib-tab-heading>Events</uib-tab-heading>\n" +
    "<events resource-kind=\"ReplicaSet\" resource-name=\"{{deployment.metadata.name}}\" project-context=\"projectContext\" ng-if=\"selectedTab.events\"></events>\n" +
    "</uib-tab>\n" +
    "</uib-tabset>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/browse/route.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"!loaded\" class=\"mar-top-xl\">Loading...</div>\n" +
    "<div ng-if=\"route\">\n" +
    "<h1>\n" +
    "{{route.metadata.name}}\n" +
    "<route-warnings ng-if=\"route.spec.to.kind !== 'Service' || services\" route=\"route\" service=\"services[route.spec.to.name]\">\n" +
    "</route-warnings>\n" +
    "<small class=\"meta\">created <relative-timestamp timestamp=\"route.metadata.creationTimestamp\"></relative-timestamp></small>\n" +
    "<div class=\"pull-right dropdown\" ng-hide=\"!('routes' | canIDoAny)\">\n" +
    "<button type=\"button\" class=\"dropdown-toggle btn btn-default actions-dropdown-btn hidden-xs\" data-toggle=\"dropdown\">\n" +
    "Actions\n" +
    "<span class=\"caret\" aria-hidden=\"true\"></span>\n" +
    "</button>\n" +
    "<a href=\"\" class=\"dropdown-toggle actions-dropdown-kebab visible-xs-inline\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v\"></i><span class=\"sr-only\">Actions</span></a>\n" +
    "<ul class=\"dropdown-menu actions action-button\">\n" +
    "<li ng-if=\"'routes' | canI : 'update'\">\n" +
    "<a ng-href=\"{{route | editResourceURL}}\" role=\"button\">Edit</a>\n" +
    "</li>\n" +
    "<li ng-if=\"'routes' | canI : 'update'\">\n" +
    "<a ng-href=\"{{route | editYamlURL}}\" role=\"button\">Edit YAML</a>\n" +
    "</li>\n" +
    "<li ng-if=\"'routes' | canI : 'delete'\">\n" +
    "<delete-link kind=\"Route\" resource-name=\"{{route.metadata.name}}\" project-name=\"{{route.metadata.namespace}}\" alerts=\"alerts\">\n" +
    "</delete-link>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "</h1>\n" +
    "<labels labels=\"route.metadata.labels\" clickable=\"true\" kind=\"routes\" project-name=\"{{route.metadata.namespace}}\" limit=\"3\"></labels>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content gutter-top\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\" ng-if=\"route\">\n" +
    "<div class=\"col-sm-12\">\n" +
    "<div class=\"resource-details\">\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<dt>Hostname<span ng-if=\"route.status.ingress.length > 1\">s</span>:</dt>\n" +
    "<dd>\n" +
    "<span ng-if=\"!route.status.ingress\">\n" +
    "{{route | routeLabel}}\n" +
    "<span data-toggle=\"popover\" data-trigger=\"hover\" data-content=\"The route is not accepting traffic yet because it has not been admitted by a router.\" style=\"cursor: help; padding-left: 5px\">\n" +
    "<status-icon status=\"'Pending'\" disable-animation></status-icon>\n" +
    "<span class=\"sr-only\">Pending</span>\n" +
    "</span>\n" +
    "</span>\n" +
    "<div ng-repeat=\"ingress in route.status.ingress\">\n" +
    "<span ng-if=\"(route | isWebRoute)\">\n" +
    "<a href=\"{{route | routeWebURL : ingress.host}}\" target=\"_blank\">{{route | routeLabel : ingress.host}}</a>\n" +
    "</span>\n" +
    "<span ng-if=\"!(route | isWebRoute)\">\n" +
    "{{route | routeLabel : ingress.host}}\n" +
    "</span>\n" +
    "&ndash;\n" +
    "<span ng-init=\"admittedCondition = (ingress | routeIngressCondition : 'Admitted')\">\n" +
    "<span ng-if=\"!admittedCondition\">admission status unknown for router '{{ingress.routerName}}'</span>\n" +
    "<span ng-if=\"admittedCondition.status === 'True'\">\n" +
    "exposed on router '{{ingress.routerName}}' <relative-timestamp timestamp=\"admittedCondition.lastTransitionTime\"></relative-timestamp>\n" +
    "</span>\n" +
    "<span ng-if=\"admittedCondition.status === 'False'\">\n" +
    "rejected by router '{{ingress.routerName}}' <relative-timestamp timestamp=\"admittedCondition.lastTransitionTime\"></relative-timestamp>\n" +
    "</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "</dd>\n" +
    "<dt>Path:</dt>\n" +
    "<dd>\n" +
    "<span ng-if=\"route.spec.path\">{{route.spec.path}}</span>\n" +
    "<span ng-if=\"!route.spec.path\"><em>none</em></span>\n" +
    "</dd>\n" +
    "<dt>{{route.spec.to.kind || \"Routes to\"}}:</dt>\n" +
    "<dd>\n" +
    "<a ng-href=\"{{route.spec.to.name | navigateResourceURL : route.spec.to.kind : route.metadata.namespace}}\">{{route.spec.to.name}}</a>\n" +
    "</dd>\n" +
    "<dt>Target Port:</dt>\n" +
    "<dd>\n" +
    "<span ng-if=\"route.spec.port.targetPort\">\n" +
    "{{route.spec.port.targetPort}}\n" +
    "</span>\n" +
    "<span ng-if=\"!route.spec.port.targetPort\"><em>any</em></span>\n" +
    "</dd>\n" +
    "<div ng-if=\"route.spec.port.targetPort && route.spec.to.kind === 'Service' && (route | routeTargetPortMapping : services[route.spec.to.name])\" class=\"help-block\">\n" +
    "This target port will route to {{route | routeTargetPortMapping : services[route.spec.to.name]}}.\n" +
    "</div>\n" +
    "</dl>\n" +
    "<div ng-if=\"route.spec.alternateBackends.length\" class=\"row\">\n" +
    "<div class=\"col-sm-12 mar-bottom-lg\">\n" +
    "<h4>Traffic</h4>\n" +
    "<div class=\"help-block\">\n" +
    "This route splits traffic across multiple services.\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"col-sm-5 col-sm-push-7 mar-bottom-lg\">\n" +
    "<route-service-pie route=\"route\"></route-service-pie>\n" +
    "</div>\n" +
    "<div class=\"col-sm-7 col-sm-pull-5\">\n" +
    "<table class=\"table table-bordered\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Service</th>\n" +
    "<th>Weight</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody>\n" +
    "<tr>\n" +
    "<td>\n" +
    "<a ng-href=\"{{route.spec.to.name | navigateResourceURL : route.spec.to.kind : route.metadata.namespace}}\">{{route.spec.to.name}}</a>\n" +
    "</td>\n" +
    "<td>\n" +
    "{{route.spec.to.weight}}\n" +
    "</td>\n" +
    "</tr>\n" +
    "<tr ng-repeat=\"alternate in route.spec.alternateBackends\">\n" +
    "<td>\n" +
    "<a ng-href=\"{{alternate.name | navigateResourceURL : alternate.kind : route.metadata.namespace}}\">{{alternate.name}}</a>\n" +
    "</td>\n" +
    "<td>\n" +
    "{{alternate.weight}}\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div style=\"margin-bottom: 10px\">\n" +
    "<h4>TLS Settings</h4>\n" +
    "<dl class=\"dl-horizontal left\" ng-if=\"route.spec.tls\">\n" +
    "<dt>Termination type:</dt>\n" +
    "<dd>{{route.spec.tls.termination}}</dd>\n" +
    "<dt ng-if-start=\"route.spec.tls.termination === 'edge'\">Insecure Traffic:</dt>\n" +
    "<dd ng-if-end>{{route.spec.tls.insecureEdgeTerminationPolicy || 'None'}}</dd>\n" +
    "<dt>Certificate:</dt>\n" +
    "<dd>\n" +
    "<span ng-show=\"route.spec.tls.certificate && !reveal.certificate\">\n" +
    "<a href=\"\" ng-click=\"reveal.certificate = true\">Show</a>\n" +
    "</span>\n" +
    "<span ng-if=\"!route.spec.tls.certificate\"><em>none</em></span>\n" +
    "</dd>\n" +
    "<div ng-if=\"reveal.certificate\">\n" +
    "<pre class=\"clipped\">{{route.spec.tls.certificate}}</pre>\n" +
    "</div>\n" +
    "<dt>Key:</dt>\n" +
    "<dd>\n" +
    "<span ng-if=\"route.spec.tls.key && !reveal.key\">\n" +
    "<a href=\"\" ng-click=\"reveal.key = true\">Show</a>\n" +
    "</span>\n" +
    "<span ng-if=\"!route.spec.tls.key\"><em>none</em></span>\n" +
    "</dd>\n" +
    "<div ng-if=\"reveal.key\">\n" +
    "<pre class=\"clipped\">{{route.spec.tls.key}}</pre>\n" +
    "</div>\n" +
    "<dt>CA Certificate:</dt>\n" +
    "<dd>\n" +
    "<span ng-show=\"route.spec.tls.caCertificate && !reveal.caCertificate\">\n" +
    "<a href=\"\" ng-click=\"reveal.caCertificate = true\">Show</a>\n" +
    "</span>\n" +
    "<span ng-if=\"!route.spec.tls.caCertificate\"><em>none</em></span>\n" +
    "</dd>\n" +
    "<div ng-if=\"reveal.caCertificate\">\n" +
    "<pre class=\"clipped\">{{route.spec.tls.caCertificate}}</pre>\n" +
    "</div>\n" +
    "<dt>Destination CA Cert:</dt>\n" +
    "<dd>\n" +
    "<span ng-show=\"route.spec.tls.destinationCACertificate && !reveal.destinationCACertificate\">\n" +
    "<a href=\"\" ng-click=\"reveal.destinationCACertificate = true\">Show</a>\n" +
    "</span>\n" +
    "<span ng-if=\"!route.spec.tls.destinationCACertificate\"><em>none</em></span>\n" +
    "</dd>\n" +
    "<div ng-if=\"reveal.destinationCACertificate\">\n" +
    "<pre class=\"clipped\">{{route.spec.tls.destinationCACertificate}}</pre>\n" +
    "</div>\n" +
    "</dl>\n" +
    "<div ng-if=\"!route.spec.tls\"><em>TLS is not enabled for this route</em></div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<annotations annotations=\"route.metadata.annotations\"></annotations>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/browse/routes.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header header-light\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"page-header page-header-bleed-right page-header-bleed-left\">\n" +
    "<div class=\"pull-right\" ng-if=\"project && ('routes' | canI : 'create')\">\n" +
    "<a ng-href=\"project/{{project.metadata.name}}/create-route\" class=\"btn btn-default\">Create Route</a>\n" +
    "</div>\n" +
    "<h1>Routes</h1>\n" +
    "</div>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"!renderOptions.showGetStarted\" class=\"data-toolbar\">\n" +
    "<div class=\"data-toolbar-filter\">\n" +
    "<project-filter></project-filter>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12 gutter-top\">\n" +
    "<table class=\"table table-bordered table-hover table-mobile\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Name</th>\n" +
    "<th>Hostname</th>\n" +
    "<th>Routes To</th>\n" +
    "<th>Target Port</th>\n" +
    "<th>TLS Termination</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody ng-if=\"(routes | hashSize) == 0\">\n" +
    "<tr><td colspan=\"5\"><em>{{emptyMessage}}</em></td></tr>\n" +
    "</tbody>\n" +
    "<tbody ng-repeat=\"route in routes | orderObjectsByDate : true\">\n" +
    "<tr>\n" +
    "<td data-title=\"Name\">\n" +
    "<a href=\"{{route | navigateResourceURL}}\">{{route.metadata.name}}</a>\n" +
    "<route-warnings ng-if=\"route.spec.to.kind !== 'Service' || services\" route=\"route\" service=\"services[route.spec.to.name]\">\n" +
    "</route-warnings>\n" +
    "</td>\n" +
    "<td data-title=\"Hostname\">\n" +
    "<span ng-if=\"(route | isWebRoute)\" class=\"word-break\">\n" +
    "<a href=\"{{route | routeWebURL}}\" target=\"_blank\">{{route | routeLabel}}</a>\n" +
    "</span>\n" +
    "<span ng-if=\"!(route | isWebRoute)\" class=\"word-break\">\n" +
    "{{route | routeLabel}}\n" +
    "</span>\n" +
    "<span ng-if=\"!route.status.ingress\" data-toggle=\"popover\" data-trigger=\"hover\" data-content=\"The route is not accepting traffic yet because it has not been admitted by a router.\" style=\"cursor: help; padding-left: 5px\">\n" +
    "<status-icon status=\"'Pending'\" disable-animation></status-icon>\n" +
    "<span class=\"sr-only\">Pending</span>\n" +
    "</span>\n" +
    "</td>\n" +
    "<td data-title=\"Routes To\">\n" +
    "<span ng-if=\"route.spec.to.kind !== 'Service'\">{{route.spec.to.kind}}: {{route.spec.to.name}}</span>\n" +
    "<span ng-if=\"route.spec.to.kind === 'Service'\"><a ng-href=\"{{route.spec.to.name | navigateResourceURL : 'Service': route.metadata.namespace}}\">{{route.spec.to.name}}</a></span>\n" +
    "</td>\n" +
    "\n" +
    "<td data-title=\"Target Port\">\n" +
    "<span ng-if=\"route.spec.port.targetPort\">\n" +
    "<span ng-if=\"route.spec.to.kind !== 'Service'\">{{route.spec.port.targetPort}}</span>\n" +
    "\n" +
    "<span ng-if=\"route.spec.to.kind === 'Service'\" ng-attr-title=\"{{route | routeTargetPortMapping : services[route.spec.to.name]}}\">\n" +
    "{{route.spec.port.targetPort}}\n" +
    "</span>\n" +
    "</span>\n" +
    "<span ng-if=\"!route.spec.port.targetPort\">&nbsp;</span>\n" +
    "</td>\n" +
    "\n" +
    "<td data-title=\"Termination\">\n" +
    "{{route.spec.tls.termination}}\n" +
    "<span ng-if=\"!route.spec.tls.termination\">&nbsp;</span>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/browse/service.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"!loaded\" class=\"mar-top-xl\">Loading...</div>\n" +
    "<div ng-if=\"service\">\n" +
    "<h1>\n" +
    "{{service.metadata.name}}\n" +
    "<div class=\"pull-right dropdown\" ng-hide=\"!('services' | canIDoAny)\">\n" +
    "<button type=\"button\" class=\"dropdown-toggle btn btn-default actions-dropdown-btn hidden-xs\" data-toggle=\"dropdown\">\n" +
    "Actions\n" +
    "<span class=\"caret\"></span>\n" +
    "</button>\n" +
    "<a href=\"\" class=\"dropdown-toggle actions-dropdown-kebab visible-xs-inline\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v\"></i><span class=\"sr-only\">Actions</span></a>\n" +
    "<ul class=\"dropdown-menu actions action-link\">\n" +
    "<li ng-if=\"'routes' | canI : 'create'\">\n" +
    "<a ng-href=\"project/{{project.metadata.name}}/create-route?service={{service.metadata.name}}\" role=\"button\">Create Route</a>\n" +
    "</li>\n" +
    "<li ng-if=\"'services' | canI : 'update'\">\n" +
    "<a ng-href=\"{{service | editYamlURL}}\" role=\"button\">Edit YAML</a>\n" +
    "</li>\n" +
    "<li ng-if=\"'services' | canI : 'delete'\">\n" +
    "<delete-link kind=\"Service\" resource-name=\"{{service.metadata.name}}\" project-name=\"{{service.metadata.namespace}}\" alerts=\"alerts\">\n" +
    "</delete-link>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "<small class=\"meta\">created <relative-timestamp timestamp=\"service.metadata.creationTimestamp\"></relative-timestamp></small>\n" +
    "</h1>\n" +
    "<labels labels=\"service.metadata.labels\" clickable=\"true\" kind=\"services\" project-name=\"{{service.metadata.namespace}}\" limit=\"3\"></labels>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\" persist-tab-state>\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\" ng-if=\"service\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<uib-tabset>\n" +
    "<uib-tab active=\"selectedTab.details\">\n" +
    "<uib-tab-heading>Details</uib-tab-heading>\n" +
    "<div class=\"resource-details\">\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<dt>Selectors:</dt>\n" +
    "<dd>\n" +
    "<span ng-if=\"!service.spec.selector\"><em>none</em></span>\n" +
    "<span ng-repeat=\"(selectorLabel, selectorValue) in service.spec.selector\"> {{selectorLabel}}={{selectorValue}}<span ng-show=\"!$last\">, </span></span>\n" +
    "</dd>\n" +
    "<dt>Type:</dt>\n" +
    "<dd>{{service.spec.type}}</dd>\n" +
    "<dt>IP:</dt>\n" +
    "<dd>{{service.spec.clusterIP}}</dd>\n" +
    "<dt>Session affinity:</dt>\n" +
    "<dd>{{service.spec.sessionAffinity}}</dd>\n" +
    "<dt ng-if=\"resource.status.loadBalancer.ingress.length\">Ingress points</dt>\n" +
    "<dd ng-if=\"resource.status.loadBalancer.ingress.length\">\n" +
    "<span ng-repeat=\"ingress in resource.status.loadBalancer.ingress\">{{ingress.ip}}<span ng-if=\"!$last\">, </span></span>\n" +
    "</dd>\n" +
    "<dt>Routes:</dt>\n" +
    "<dd>\n" +
    "<span ng-if=\"!routesForService.length\">\n" +
    "<a ng-href=\"project/{{project.metadata.name}}/create-route?service={{service.metadata.name}}\" ng-if=\"'routes' | canI : 'create'\">Create route</a>\n" +
    "</span>\n" +
    "<span ng-repeat=\"route in routesForService\">\n" +
    "<span ng-if=\"route | isWebRoute\"><a ng-href=\"{{route | routeWebURL}}\">{{route | routeLabel}}</a></span>\n" +
    "<span ng-if=\"!(route | isWebRoute)\">{{route | routeLabel}}</span>\n" +
    "<span ng-show=\"!$last\">, </span>\n" +
    "</span>\n" +
    "</dd>\n" +
    "</dl>\n" +
    "<div ng-if=\"service.spec.ports.length\" class=\"table-responsive\">\n" +
    "<table class=\"table table-bordered small service-table\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Node Port</th>\n" +
    "<th role=\"presentation\"></th>\n" +
    "<th>Service Port</th>\n" +
    "<th role=\"presentation\"></th>\n" +
    "<th>Target Port</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody>\n" +
    "<tr ng-repeat=\"portMapping in service.spec.ports | orderBy:'port'\">\n" +
    "<td>\n" +
    "<span ng-if=\"portMapping.nodePort\">{{portMapping.nodePort}}</span>\n" +
    "<span ng-if=\"!portMapping.nodePort\" class=\"text-muted\">none</span>\n" +
    "</td>\n" +
    "<td role=\"presentation\" class=\"text-muted\">&#8594;</td>\n" +
    "<td>{{portMapping.port}}/{{portMapping.protocol}}\n" +
    "<span ng-if=\"portMapping.name\">({{portMapping.name}})</span></td>\n" +
    "<td role=\"presentation\" class=\"text-muted\">&#8594;</td>\n" +
    "<td>{{portMapping.targetPort}}</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "<annotations annotations=\"service.metadata.annotations\"></annotations>\n" +
    "</div>\n" +
    "</uib-tab>\n" +
    "<uib-tab active=\"selectedTab.events\" ng-if=\"'events' | canI : 'watch'\">\n" +
    "<uib-tab-heading>Events</uib-tab-heading>\n" +
    "<events resource-kind=\"Service\" resource-name=\"{{service.metadata.name}}\" project-context=\"projectContext\" ng-if=\"selectedTab.events\"></events>\n" +
    "</uib-tab>\n" +
    "</uib-tabset>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/builds.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header header-light\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"page-header page-header-bleed-right page-header-bleed-left\">\n" +
    "<h1>Builds</h1>\n" +
    "</div>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"!renderOptions.showGetStarted\" class=\"data-toolbar\">\n" +
    "<div class=\"data-toolbar-filter\">\n" +
    "<project-filter></project-filter>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12 gutter-top\">\n" +
    "<table class=\"table table-bordered table-hover table-mobile\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Name</th>\n" +
    "<th>Last Build</th>\n" +
    "<th>Status</th>\n" +
    "<th>Created</th>\n" +
    "<th>Type</th>\n" +
    "<th>Source</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody ng-if=\"!(latestByConfig | hashSize)\">\n" +
    "<tr><td colspan=\"6\"><em>{{emptyMessage}}</em></td></tr>\n" +
    "</tbody>\n" +
    "<tbody ng-repeat=\"(buildConfigName, latestBuild) in latestByConfig\">\n" +
    "\n" +
    "<tr ng-if=\"!latestBuild\">\n" +
    "<td data-title=\"Name\">\n" +
    "<a href=\"{{buildConfigs[buildConfigName] | navigateResourceURL}}\">{{buildConfigName}}</a>\n" +
    "</td>\n" +
    "<td data-title=\"Last Build\"><em>No builds</em></td>\n" +
    "<td class=\"hidden-xs\">&nbsp;</td>\n" +
    "<td class=\"hidden-xs\">&nbsp;</td>\n" +
    "<td data-title=\"Type\">{{buildConfigs[buildConfigName].spec.strategy.type | startCase}}</td>\n" +
    "<td data-title=\"Source\">\n" +
    "<span ng-if=\"buildConfigs[buildConfigName].spec.source.type == 'None'\"><i>none</i></span>\n" +
    "<span class=\"word-break\" ng-if=\"buildConfigs[buildConfigName].spec.source.type == 'Git'\"><osc-git-link uri=\"buildConfigs[buildConfigName].spec.source.git.uri\" ref=\"buildConfigs[buildConfigName].spec.source.git.ref\" context-dir=\"buildConfigs[buildConfigName].spec.source.contextDir\">{{buildConfigs[buildConfigName].spec.source.git.uri}}</osc-git-link></span></td>\n" +
    "</tr>\n" +
    "\n" +
    "\n" +
    "<tr ng-if=\"latestBuild && (buildConfigs[buildConfigName] || !unfilteredBuildConfigs[buildConfigName])\">\n" +
    "<td data-title=\"Name\">\n" +
    "<a ng-if=\"buildConfigName\" href=\"{{latestBuild | configURLForResource}}\">{{buildConfigName}}</a>\n" +
    "<span ng-if=\"buildConfigs && buildConfigName && !buildConfigs[buildConfigName]\" class=\"pficon pficon-warning-triangle-o\" data-toggle=\"tooltip\" title=\"This build config no longer exists\" style=\"cursor: help\"></span>\n" +
    "<span ng-if=\"buildConfigName == ''\"><em>none</em></span>\n" +
    "</td>\n" +
    "<td data-title=\"Last Build\">\n" +
    "\n" +
    "<span ng-if=\"(latestBuild | annotation : 'buildNumber') && buildConfigName\">\n" +
    "<a ng-href=\"{{latestBuild | navigateResourceURL}}\">#{{latestBuild | annotation : 'buildNumber'}}</a>\n" +
    "</span>\n" +
    "<span ng-if=\"!(latestBuild | annotation : 'buildNumber') && buildConfigName\">\n" +
    "<a ng-href=\"{{latestBuild | navigateResourceURL}}\">{{latestBuild.metadata.name}}</a>\n" +
    "</span>\n" +
    "<span ng-if=\"buildConfigName == ''\">\n" +
    "<a ng-href=\"{{latestBuild | navigateResourceURL}}\">{{latestBuild.metadata.name}}</a>\n" +
    "</span>\n" +
    "</td>\n" +
    "<td data-title=\"Status\">\n" +
    "<div row class=\"status\">\n" +
    "<build-status build=\"latestBuild\"></build-status>\n" +
    "</div>\n" +
    "</td>\n" +
    "<td data-title=\"Created\">\n" +
    "<relative-timestamp timestamp=\"latestBuild.metadata.creationTimestamp\"></relative-timestamp>\n" +
    "</td>\n" +
    "<td data-title=\"Type\">{{latestBuild.spec.strategy.type | startCase}}</td>\n" +
    "<td data-title=\"Source\" class=\"word-break-all\">\n" +
    "<span ng-if=\"latestBuild.spec.source\">\n" +
    "<span ng-if=\"latestBuild.spec.source.type == 'None'\">\n" +
    "<i>none</i>\n" +
    "</span>\n" +
    "<span class=\"word-break\"><osc-git-link uri=\"latestBuild.spec.source.git.uri\" ref=\"latestBuild.spec.source.git.ref\" context-dir=\"latestBuild.spec.source.contextDir\">{{latestBuild.spec.source.git.uri}}</osc-git-link></span>\n" +
    "</span>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/catalog/_catalog-category.html',
    "<section>\n" +
    "<h3>\n" +
    "{{categoryLabel}}\n" +
    "<small ng-show=\"itemLimit && (builders.length > itemLimit || templates.length > itemLimit)\" class=\"pull-right\">\n" +
    "<a href=\"\" ng-click=\"itemLimit = undefined\">See all</a>\n" +
    "</small>\n" +
    "</h3>\n" +
    "<div class=\"catalog\">\n" +
    "\n" +
    "<catalog-image image-stream=\"builder.imageStream\" image-tag=\"builder.imageStreamTag\" project=\"{{project}}\" version=\"builder.version\" filter-tag=\"filterTag\" referenced-by=\"builder.referencedBy\" is-builder=\"true\" ng-repeat=\"builder in builders | limitToOrAll: itemLimit track by builderID(builder)\">\n" +
    "</catalog-image>\n" +
    "\n" +
    "<catalog-template template=\"template\" project=\"{{project}}\" filter-tag=\"filterTag\" ng-repeat=\"template in templates | orderBy : ['metadata.name', 'metadata.namespace'] | limitToOrAll: itemLimit track by (template | uid)\">\n" +
    "</catalog-template>\n" +
    "</div>\n" +
    "</section>"
  );


  $templateCache.put('views/catalog/_image.html',
    "<div class=\"tile tile-compact tile-image tile-click label-tags\" id=\"\" ng-attr-title=\"{{imageStream | imageStreamTagAnnotation : 'description' : imageTag}}\">\n" +
    "<div row cross-axis=\"center\" class=\"tile-flex\">\n" +
    "<div row main-axis=\"center\" class=\"image-icon\">\n" +
    "<custom-icon resource=\"imageStream\" kind=\"image\" tag=\"imageTag\" title=\"{{imageStream.metadata.name}}:{{imageTag}}\"></custom-icon>\n" +
    "</div>\n" +
    "<div flex>\n" +
    "<h3>\n" +
    "<a class=\"tile-target\" ng-href=\"{{imageStream | createFromImageURL : imageTag : project}}\">{{imageStream.metadata.name}}:{{imageTag}}</a>\n" +
    "<small ng-if=\"referencedBy.length\">\n" +
    "&ndash;\n" +
    "<span ng-repeat=\"otherTag in referencedBy\">\n" +
    "{{otherTag}}<span ng-if=\"!$last\">,</span>\n" +
    "</span>\n" +
    "</small>\n" +
    "</h3>\n" +
    "<div ng-if=\"imageStream | imageStreamTagAnnotation : 'provider' : imageTag\">\n" +
    "<label style=\"margin-right: 5px\">Provider:</label>\n" +
    "{{imageStream | imageStreamTagAnnotation : 'provider' : imageTag}}\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"imageStream.metadata.namespace !== 'openshift'\">\n" +
    "<label style=\"margin-right: 5px\">Namespace:</label>\n" +
    "{{imageStream.metadata.namespace}}\n" +
    "</div>\n" +
    "<div ng-if=\"version && version !== imageTag\">\n" +
    "<label style=\"margin-right: 5px\">Version:</label>\n" +
    "{{version}}\n" +
    "</div>\n" +
    "<a href=\"\" ng-click=\"filterTag(tag)\" ng-repeat=\"tag in (imageStream | imageStreamTagTags : imageTag)\" ng-attr-title=\"Filter by tag {{tag}}\" class=\"tag small\">\n" +
    "{{tag}}\n" +
    "</a>\n" +
    "</div>\n" +
    "\n" +
    "<div title=\"\" ng-if=\"isBuilder\">\n" +
    "<i class=\"pficon pficon-image tile-badge-icon\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-original-title=\"Builder Image\"></i>\n" +
    "<span class=\"sr-only\">Builder Image</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/catalog/_template.html',
    "<div class=\"tile tile-compact tile-template tile-click label-tags\" ng-attr-title=\"{{(template | description) || template.metadata.name}}\">\n" +
    "<div row cross-axis=\"center\" class=\"tile-flex\">\n" +
    "<div row main-axis=\"center\" class=\"image-icon\">\n" +
    "<custom-icon resource=\"template\" kind=\"template\"></custom-icon>\n" +
    "</div>\n" +
    "<div flex>\n" +
    "<h3><a class=\"tile-target\" ng-href=\"{{template | createFromTemplateURL : project}}\">{{template.metadata.name}}</a></h3>\n" +
    "<div ng-if=\"template | annotation : 'provider'\">\n" +
    "<label style=\"margin-right: 5px\">Provider:</label>\n" +
    "{{template | annotation : 'provider'}}\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"template.metadata.namespace !== 'openshift'\">\n" +
    "<label style=\"margin-right: 5px\">Namespace:</label>\n" +
    "{{template.metadata.namespace}}\n" +
    "</div>\n" +
    "<div ng-if=\"template | annotation : 'version'\">\n" +
    "<label style=\"margin-right: 5px\">Version:</label>\n" +
    "{{template | annotation : 'version'}}\n" +
    "</div>\n" +
    "<a href=\"\" ng-click=\"filterTag(tag)\" ng-repeat=\"tag in (template | tags)\" ng-attr-title=\"Filter by tag {{tag}}\" class=\"tag small\">\n" +
    "{{tag}}\n" +
    "</a>\n" +
    "</div>\n" +
    "\n" +
    "<div title=\"\">\n" +
    "<span ng-if=\"(template | tags).indexOf('quickstart') !== -1\">\n" +
    "<i class=\"fa fa-bolt tile-badge-icon\" style=\"margin-right: 5px\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-original-title=\"Quickstart\"></i>\n" +
    "<span class=\"sr-only\">Quickstart</span>\n" +
    "</span>\n" +
    "<i class=\"fa fa-clone tile-badge-icon\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-original-title=\"Template\"></i>\n" +
    "<span class=\"sr-only\">Template</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/command-line.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"middle surface-shaded\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container surface-shaded gutter-top\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<div class=\"command-line\">\n" +
    "<h1 id=\"cli\">Command Line Tools</h1>\n" +
    "<p>\n" +
    "With the OpenShift command line interface (CLI), you can create applications and manage OpenShift projects from a terminal.\n" +
    "<span ng-if=\"cliDownloadURLPresent\">\n" +
    "You can download the <code>oc</code> client tool using the links below. For more information about downloading and installing it, please refer to the <a target=\"_blank\" href=\"{{'get_started_cli' | helpLink}}\">Get Started with the CLI</a> documentation.\n" +
    "</span>\n" +
    "<span ng-if=\"!cliDownloadURLPresent\">\n" +
    "Refer to the <a target=\"_blank\" href=\"{{'get_started_cli' | helpLink}}\">Get Started with the CLI</a> documentation for instructions about downloading and installing the <code>oc</code> client tool.\n" +
    "</span>\n" +
    "<div ng-if=\"cliDownloadURLPresent\">\n" +
    "<label class=\"cli-download-label\">Download <code>oc</code>:</label>\n" +
    "<div ng-repeat=\"(key, value) in cliDownloadURL\">\n" +
    "\n" +
    "<a ng-href=\"{{value}}\" class=\"cli-download-link\" target=\"_self\">\n" +
    "{{key}}\n" +
    "<i class=\"fa fa-external-link\"></i>\n" +
    "</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "</p>\n" +
    "<p>\n" +
    "After downloading and installing it, you can start by logging in using<span ng-if=\"sessionToken\"> this current session token</span>:\n" +
    "<div class=\"code prettyprint ng-binding\" ng-if=\"sessionToken\">\n" +
    "oc login {{loginBaseURL}} --token=<span ng-show=\"showSessionToken\">{{sessionToken}}</span><a href=\"#\" ng-click=\"toggleShowSessionToken()\" ng-show=\"!showSessionToken\">...click to show token...</a>\n" +
    "</div>\n" +
    "<pre class=\"code prettyprint ng-binding\" ng-if=\"!sessionToken\">\n" +
    "                      oc login {{loginBaseURL}}\n" +
    "                    </pre>\n" +
    "</p>\n" +
    "<div ng-show=\"showSessionToken\" class=\"alert alert-warning\">\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" aria-hidden=\"true\"></span>\n" +
    "<strong>A token is a form of a password.</strong>\n" +
    "Do not share your API token.\n" +
    "</div>\n" +
    "<p>After you login to your account you will get a list of projects that you can switch between:\n" +
    "<pre class=\"code prettyprint\">oc project <i>project-name</i></pre>\n" +
    "</p>\n" +
    "<p>If you do not have any existing projects, you can create one:\n" +
    "<pre class=\"code prettyprint\">oc new-project <i>project-name</i></pre>\n" +
    "</p>\n" +
    "<p>To show a high level overview of the current project:\n" +
    "<pre class=\"code prettyprint\">oc status</pre>\n" +
    "</p>\n" +
    "<p>For other information about the command line tools, check the <a target=\"_blank\" href=\"{{'cli' | helpLink}}\">CLI Reference</a> and <a target=\"_blank\" href=\"{{'basic_cli_operations' | helpLink}}\">Basic CLI Operations</a>.</p>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/create-persistent-volume-claim.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"middle surface-shaded\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container surface-shaded\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-10 col-md-offset-1 gutter-top\">\n" +
    "<h1>Request Storage</h1>\n" +
    "<div>\n" +
    "<span class=\"help-block\">\n" +
    "Create a request for an administrator defined storage asset by requesting size and access mode attributes for a best fit.\n" +
    "</span>\n" +
    "</div>\n" +
    "<form name=\"createPersistentVolumeClaimForm\">\n" +
    "<div>\n" +
    "<fieldset ng-disabled=\"disableInputs\">\n" +
    "<osc-persistent-volume-claim model=\"claim\">\n" +
    "</osc-persistent-volume-claim>\n" +
    "<div class=\"button-group gutter-top gutter-bottom\">\n" +
    "<button type=\"submit\" class=\"btn btn-primary btn-lg\" ng-click=\"createPersistentVolumeClaim()\" ng-disabled=\"createPersistentVolumeClaimForm.$invalid || disableInputs\" value=\"\">Create</button>\n" +
    "<a class=\"btn btn-default btn-lg\" href=\"\" back>Cancel</a>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "</div>\n" +
    "</form>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/create-project.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"middle surface-shaded\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container surface-shaded gutter-top\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<h1>New Project</h1>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<form name=\"createProjectForm\">\n" +
    "<fieldset ng-disabled=\"disableInputs\">\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"name\" class=\"required\">Name</label>\n" +
    "<span ng-class=\"{'has-error': (createProjectForm.name.$error.pattern && createProjectForm.name.$touched) || nameTaken}\">\n" +
    "<input class=\"form-control input-lg\" name=\"name\" id=\"name\" placeholder=\"my-project\" type=\"text\" required take-focus minlength=\"2\" maxlength=\"63\" pattern=\"[a-z0-9]([-a-z0-9]*[a-z0-9])?\" aria-describedby=\"nameHelp\" ng-model=\"name\" ng-model-options=\"{ updateOn: 'default blur' }\" ng-change=\"nameTaken = false\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck>\n" +
    "</span>\n" +
    "<div>\n" +
    "<span class=\"help-block\">A unique name for the project.</span>\n" +
    "</div>\n" +
    "<div class=\"has-error\">\n" +
    "<span id=\"nameHelp\" class=\"help-block\" ng-if=\"createProjectForm.name.$error.pattern && createProjectForm.name.$touched\">\n" +
    "Project names may only contain lower-case letters, numbers, and dashes. They may not start or end with a dash.</span>\n" +
    "</div>\n" +
    "<div class=\"has-error\">\n" +
    "<span class=\"help-block\" ng-if=\"nameTaken\">This name is already in use. Please choose a different name.</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"displayName\">Display Name</label>\n" +
    "<input class=\"form-control input-lg\" name=\"displayName\" id=\"displayName\" placeholder=\"My Project\" type=\"text\" ng-model=\"displayName\">\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"description\">Description</label>\n" +
    "<textarea class=\"form-control input-lg\" name=\"description\" id=\"description\" placeholder=\"A short description.\" ng-model=\"description\"></textarea>\n" +
    "</div>\n" +
    "<div class=\"button-group\">\n" +
    "<button type=\"submit\" class=\"btn btn-primary btn-lg\" ng-click=\"createProject()\" ng-disabled=\"createProjectForm.$invalid || nameTaken || disableInputs\" value=\"\">Create</button>\n" +
    "<a class=\"btn btn-default btn-lg\" href=\"#\" back>Cancel</a>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "</form>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/create-route.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"middle surface-shaded\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container surface-shaded\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-10 col-md-offset-1 gutter-top\">\n" +
    "<h1>Create Route</h1>\n" +
    "<div>\n" +
    "<span class=\"help-block\">\n" +
    "Routing is a way to make your application publicly visible.\n" +
    "</span>\n" +
    "</div>\n" +
    "<form name=\"createRouteForm\">\n" +
    "<div ng-if=\"!services\">Loading...</div>\n" +
    "<div ng-if=\"services\">\n" +
    "<fieldset ng-disabled=\"disableInputs\">\n" +
    "<osc-routing model=\"routing\" services=\"services\" show-name-input=\"true\">\n" +
    "</osc-routing>\n" +
    "<div class=\"button-group gutter-top gutter-bottom\">\n" +
    "<button type=\"submit\" class=\"btn btn-primary btn-lg\" ng-click=\"createRoute()\" ng-disabled=\"createRouteForm.$invalid || disableInputs || !createRoute\" value=\"\">Create</button>\n" +
    "<a class=\"btn btn-default btn-lg\" href=\"#\" back>Cancel</a>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "</div>\n" +
    "</form>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/create.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"add-to-project middle surface-shaded\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content\" persist-tab-state>\n" +
    "<div class=\"container surface-shaded\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<uib-tabset class=\"mar-top-none\">\n" +
    "<uib-tab active=\"selectedTab.fromCatalog\">\n" +
    "<uib-tab-heading>Browse Catalog</uib-tab-heading>\n" +
    "<p ng-if=\"emptyCatalog && !loaded\">Loading...</p>\n" +
    "<div ng-if=\"emptyCatalog && loaded && !nonBuilderImages.length\" class=\"empty-state-message empty-state-full-page\">\n" +
    "<h2 class=\"text-center\">No images or templates.</h2>\n" +
    "<p class=\"gutter-top\">\n" +
    "No images or templates are loaded for this project or the shared\n" +
    "<code>openshift</code> namespace. An image or template is required to add content.\n" +
    "</p>\n" +
    "<p>\n" +
    "To add an image stream or template from a file, use the editor in the\n" +
    "<strong>Import YAML / JSON</strong> tab, or run the following command:\n" +
    "<div><code>oc create -f &lt;filename&gt; -n {{projectName}}</code></div>\n" +
    "</p>\n" +
    "<p><a href=\"{{projectName | projectOverviewURL}}\">Back to overview</a></p>\n" +
    "</div>\n" +
    "\n" +
    "<p ng-if=\"emptyCatalog && loaded && nonBuilderImages.length\">No builder images or templates.</p>\n" +
    "<div ng-show=\"!emptyCatalog\">\n" +
    "<div class=\"row\">\n" +
    "\n" +
    "<div class=\"col-sm-6 catalog-header-left\">\n" +
    "Choose from web frameworks, databases, and other components to add content to your project.\n" +
    "<div class=\"filter-group\">\n" +
    "\n" +
    "<label for=\"search\" class=\"sr-only\">Filter by name, tag, or description</label>\n" +
    "\n" +
    "<div uib-dropdown uib-keyboard-nav class=\"btn-group pull-right\">\n" +
    "<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" role=\"menu\">\n" +
    "Browse\n" +
    "<span class=\"caret\" aria-hidden=\"true\"></span>\n" +
    "</button>\n" +
    "<ul class=\"uib-dropdown-menu\">\n" +
    "<li ng-repeat=\"tag in browseGeneral\" role=\"menuitem\">\n" +
    "<a href=\"\" ng-click=\"filter.tag = tag\">{{tag}}</a>\n" +
    "</li>\n" +
    "<li class=\"divider\"></li>\n" +
    "<li ng-repeat=\"tag in browseTechnologies\" ng-if=\"tag\" role=\"menuitem\">\n" +
    "<a href=\"\" ng-click=\"filter.tag = tag\">{{tag}}</a>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "\n" +
    "<div style=\"overflow: hidden; padding-right: 10px\">\n" +
    "<input ng-model=\"filter.keyword\" type=\"search\" id=\"search\" placeholder=\"Filter by name, tag, or description\" class=\"search-input form-control\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck style=\"width: 100%\">\n" +
    "</div>\n" +
    "<div ng-if=\"filter.tag\">\n" +
    "Tagged with {{filter.tag}}.\n" +
    "<a href=\"\" ng-click=\"filter.tag = ''\">See all tags</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-sm-6 catalog-legend\">\n" +
    "<dl aria-hidden=\"true\" class=\"text-muted\">\n" +
    "<dt>\n" +
    "<i class=\"pficon pficon-image fa-fw\"></i> Builder Image\n" +
    "</dt>\n" +
    "<dd>Builds images from source code in a Git repository.</dd>\n" +
    "<dt>\n" +
    "<i class=\"fa fa-clone fa-fw\"></i> Template\n" +
    "</dt>\n" +
    "<dd>Creates a predefined set of resources.</dd>\n" +
    "<dt>\n" +
    "<i class=\"fa fa-bolt fa-fw\"></i> Quickstart\n" +
    "</dt>\n" +
    "<dd>Provides a skeleton for developing an application.</dd>\n" +
    "</dl>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"filteredCategoryTags.length === 0 && !emptyCatalog && loaded\" style=\"margin-top: 5px\">\n" +
    "All builder images and templates are hidden by the current filter.\n" +
    "<a href=\"\" ng-click=\"filter.keyword = ''; filter.tag = ''\">Clear filter</a>\n" +
    "</div>\n" +
    "<div class=\"row gutter-top\">\n" +
    "\n" +
    "<div class=\"col-md-6 catalog-col catalog-col-1\">\n" +
    "<div ng-repeat=\"category in leftCategories\">\n" +
    "<catalog-category category-label=\"{{categoryLabels[category] || tag}}\" builders=\"filteredBuildersByCategory[category]\" templates=\"filteredTemplatesByCategory[category]\" project=\"{{projectName}}\" item-limit=\"{{itemLimit}}\" filter-tag=\"filterTag\">\n" +
    "</catalog-category>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-md-6 catalog-col catalog-col-2\">\n" +
    "<div ng-repeat=\"category in rightCategories\">\n" +
    "<catalog-category category-label=\"{{categoryLabels[category] || tag}}\" builders=\"filteredBuildersByCategory[category]\" templates=\"filteredTemplatesByCategory[category]\" project=\"{{projectName}}\" item-limit=\"{{itemLimit}}\" filter-tag=\"filterTag\">\n" +
    "</catalog-category>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"filteredNonBuilders.length\" click-to-reveal link-text=\"Don't see the image you are looking for?\" class=\"gutter-bottom\">\n" +
    "<h2>Additional Images</h2>\n" +
    "<div class=\"alert alert-warning\">\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" aria-hidden=\"true\"></span>\n" +
    "<span class=\"sr-only\">Warning:</span>\n" +
    "These images are not tagged as builder images. Selecting one will attempt to use it to build source code from a Git repository. If you want to deploy an image without building source code, select an image from the\n" +
    "<a href=\"\" ng-click=\"selectedTab.deployImage = true\">Deploy Image</a> tab.\n" +
    "</div>\n" +
    "<div class=\"catalog catalog-fluid\">\n" +
    "<catalog-image image-stream=\"image.imageStream\" image-tag=\"image.imageStreamTag\" project=\"{{projectName}}\" version=\"image.version\" referenced-by=\"image.referencedBy\" ng-repeat=\"image in filteredNonBuilders | orderBy : ['name', 'imageStream.metadata.namespace']\">\n" +
    "</catalog-image>\n" +
    "\n" +
    "<div style=\"height: 0\" class=\"tile-image\"></div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</uib-tab>\n" +
    "<uib-tab active=\"selectedTab.deployImage\">\n" +
    "<uib-tab-heading>Deploy Image</uib-tab-heading>\n" +
    "<deploy-image project=\"projectName\" context=\"context\" alerts=\"alerts\"></deploy-image>\n" +
    "</uib-tab>\n" +
    "<uib-tab active=\"selectedTab.fromFile\">\n" +
    "<uib-tab-heading>Import YAML / JSON</uib-tab-heading>\n" +
    "<from-file></from-file>\n" +
    "</uib-tab>\n" +
    "</uib-tabset>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/create/fromimage.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"middle surface-shaded\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container surface-shaded\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<div class=\"osc-form\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-2 template-name gutter-top hidden-sm hidden-xs\">\n" +
    "<span class=\"fa fa-cubes\"></span>\n" +
    "</div>\n" +
    "<div class=\"col-md-8\">\n" +
    "<fieldset ng-disabled=\"disableInputs\">\n" +
    "<osc-image-summary resource=\"image\" name=\"imageName\" tag=\"imageTag\"></osc-image-summary>\n" +
    "<div class=\"clearfix visible-xs-block\"></div>\n" +
    "<form class=\"\" ng-show=\"imageStream\" novalidate name=\"form\" ng-submit=\"createApp()\">\n" +
    "<div style=\"margin-bottom: 15px\">\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"appname\" class=\"required\">Name</label>\n" +
    "\n" +
    "<div ng-class=\"{'has-error': (form.appname.$error.required && form.appname.$dirty) || (form.appname.$invalid && shouldValidateName) || nameTaken}\">\n" +
    "<input type=\"text\" required take-focus minlength=\"2\" maxlength=\"24\" pattern=\"[a-z]([-a-z0-9]*[a-z0-9])?\" ng-model=\"name\" id=\"appname\" name=\"appname\" ng-change=\"nameTaken = false\" ng-blur=\"shouldValidateName = form.appname.$dirty\" class=\"form-control\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck>\n" +
    "</div>\n" +
    "<div class=\"help-block\">Identifies the resources created for this application.</div>\n" +
    "<div class=\"has-error\" ng-show=\"form.appname.$error.required && form.appname.$dirty\">\n" +
    "<span class=\"help-block\">A name is required.</span>\n" +
    "</div>\n" +
    "<div class=\"has-error\" ng-show=\"form.appname.$error.pattern && shouldValidateName\">\n" +
    "<span class=\"help-block\"><strong>Please enter a valid name.</strong>\n" +
    "<p>A valid name is applied to all generated resources. It is an alphanumeric (a-z, and 0-9) string with a maximum length of 24 characters, where the first character is a letter (a-z), and the '-' character is allowed anywhere except the first or last character.</p>\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class=\"has-error\" ng-show=\"form.appname.$error.minlength && shouldValidateName\">\n" +
    "<span class=\"help-block\">The name must have at least 2 characters.</span>\n" +
    "</div>\n" +
    "<div class=\"has-error\" ng-show=\"nameTaken\">\n" +
    "<span class=\"help-block\">This name is already in use within the project. Please choose a different name.</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"sourceUrl\" class=\"required\">Git Repository URL</label>\n" +
    "<div ng-class=\"{'has-warning': form.sourceUrl.$dirty && !sourceURLPattern.test(buildConfig.sourceUrl), 'has-error': (form.sourceUrl.$error.required && form.sourceUrl.$dirty)}\">\n" +
    "\n" +
    "<input class=\"form-control\" id=\"sourceUrl\" name=\"sourceUrl\" type=\"text\" required aria-describedby=\"from_source_help\" ng-model=\"buildConfig.sourceUrl\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck>\n" +
    "</div>\n" +
    "<div ng-if=\"image.metadata.annotations.sampleRepo\" class=\"help-block\">\n" +
    "Sample repository for {{imageName}}: {{image.metadata.annotations.sampleRepo}}<span ng-if=\"image.metadata.annotations.sampleRef\">, ref: {{image.metadata.annotations.sampleRef}}</span><span ng-if=\"image.metadata.annotations.sampleContextDir\">, context dir: {{image.metadata.annotations.sampleContextDir}}</span>\n" +
    "<a href=\"\" ng-click=\"fillSampleRepo()\" style=\"margin-left: 3px\" class=\"nowrap\">Try it<i class=\"fa fa-level-up\" style=\"margin-left: 3px; font-size: 17px\"></i></a>\n" +
    "</div>\n" +
    "<div class=\"has-error\" ng-show=\"form.sourceUrl.$error.required && form.sourceUrl.$dirty\">\n" +
    "<span class=\"help-block\">A Git repository URL is required.</span>\n" +
    "</div>\n" +
    "<div>\n" +
    "<span class=\"text-warning\" ng-if=\"form.sourceUrl.$dirty && !sourceURLPattern.test(buildConfig.sourceUrl)\">Git repository should be a URL.</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div click-to-reveal link-text=\"Show advanced routing, build, and deployment options\">\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"gitref\">Git Reference</label>\n" +
    "<div>\n" +
    "<input id=\"gitref\" ng-model=\"buildConfig.gitRef\" type=\"text\" placeholder=\"master\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck class=\"form-control\">\n" +
    "</div>\n" +
    "<div class=\"help-block\">Optional branch, tag, or commit.</div>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"contextdir\">Context Dir</label>\n" +
    "<div>\n" +
    "<input id=\"contextdir\" ng-model=\"buildConfig.contextDir\" type=\"text\" placeholder=\"/\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck class=\"form-control\">\n" +
    "</div>\n" +
    "<div class=\"help-block\">Optional subdirectory for the application source code, used as the context directory for the build.</div> </div>\n" +
    "\n" +
    "<osc-form-section header=\"Routing\" about-title=\"Routing\" about=\"Routing is a way to make your application publicly visible. Otherwise you may only be able to access your application by its IP address, if allowed by the system administrator.\" expand=\"true\" can-toggle=\"false\" ng-if=\"routing.portOptions.length\">\n" +
    "<div class=\"form-group checkbox\">\n" +
    "<label>\n" +
    "<input type=\"checkbox\" ng-model=\"routing.include\">\n" +
    "Create a route to the application\n" +
    "</label>\n" +
    "</div>\n" +
    "<osc-routing model=\"routing\" routing-disabled=\"!routing.include\">\n" +
    "</osc-routing>\n" +
    "</osc-form-section>\n" +
    "\n" +
    "<osc-form-section header=\"Build Configuration\" about-title=\"Build Configuration\" about=\"A build configuration describes how to build your deployable image.  This includes\n" +
    "                                your source, the base builder image, and when to launch new builds.\" expand=\"true\" can-toggle=\"false\">\n" +
    "<div class=\"checkbox\">\n" +
    "<label>\n" +
    "<input type=\"checkbox\" ng-model=\"buildConfig.buildOnSourceChange\"/>\n" +
    "Configure a webhook build trigger\n" +
    "<span class=\"help action-inline\">\n" +
    "<a href data-toggle=\"tooltip\" data-original-title=\"The source repository must be configured to use the webhook to trigger a build when source is committed.\">\n" +
    "<i class=\"pficon pficon-help\"></i>\n" +
    "</a>\n" +
    "</span>\n" +
    "</label>\n" +
    "</div>\n" +
    "<div class=\"checkbox\">\n" +
    "<label>\n" +
    "<input type=\"checkbox\" ng-model=\"buildConfig.buildOnImageChange\"/>\n" +
    "Automatically build a new image when the builder image changes\n" +
    "<span class=\"help action-inline\">\n" +
    "<a href data-toggle=\"tooltip\" data-original-title=\"Automatically building a new image when the builder image changes allows your code to always run on the latest updates.\">\n" +
    "<i class=\"pficon pficon-help\"></i>\n" +
    "</a>\n" +
    "</span>\n" +
    "</label>\n" +
    "</div>\n" +
    "<div class=\"checkbox\">\n" +
    "<label>\n" +
    "<input type=\"checkbox\" ng-model=\"buildConfig.buildOnConfigChange\"/>\n" +
    "Launch the first build when the build configuration is created\n" +
    "</label>\n" +
    "</div>\n" +
    "<h3>Environment Variables (Build and Runtime) <span class=\"help action-inline\">\n" +
    "<a href data-toggle=\"tooltip\" data-original-title=\"Environment variables are used to configure and pass information to running containers.  These environment variables will be available during your build and at runtime.\">\n" +
    "<i class=\"pficon pficon-help\"></i>\n" +
    "</a>\n" +
    "</span></h3>\n" +
    "<key-value-editor entries=\"buildConfigEnvVars\" key-placeholder=\"name\" value-placeholder=\"value\" key-validator=\"[a-zA-Z][a-zA-Z0-9_]*\" key-validator-error-tooltip=\"A valid environment variable name is an alphanumeric (a-z and 0-9) string beginning with a letter that may contain underscores.\" add-row-link=\"Add environment variable\"></key-value-editor>\n" +
    "</osc-form-section>\n" +
    "\n" +
    "<osc-form-section header=\"Deployment Configuration\" about-title=\"Deployment Configuration\" about=\"Deployment configurations describe how your application is configured\n" +
    "                                by the cluster and under what conditions it should be recreated (e.g. when the image changes).\" expand=\"true\" can-toggle=\"false\">\n" +
    "<div class=\"animate-drawer\" ng-show=\"$parent.expand\">\n" +
    "<h3>Autodeploy when</h3>\n" +
    "<div class=\"checkbox\">\n" +
    "<label>\n" +
    "<input type=\"checkbox\" ng-model=\"deploymentConfig.deployOnNewImage\">\n" +
    "New image is available\n" +
    "</label>\n" +
    "</div>\n" +
    "<div class=\"checkbox\">\n" +
    "<label>\n" +
    "<input type=\"checkbox\" ng-model=\"deploymentConfig.deployOnConfigChange\">\n" +
    "Deployment configuration changes\n" +
    "</label>\n" +
    "</div>\n" +
    "<div>\n" +
    "<h3>Environment Variables (Runtime only) <span class=\"help action-inline\">\n" +
    "<a href=\"\" data-toggle=\"tooltip\" data-original-title=\"Environment variables are used to configure and pass information to running containers.  These environment variables will only be available at runtime.\">\n" +
    "<i class=\"pficon pficon-help\"></i>\n" +
    "</a>\n" +
    "</span></h3>\n" +
    "<p ng-show=\"DCEnvVarsFromImage.length\">\n" +
    "<a href=\"\" ng-click=\"showDCEnvs = (!showDCEnvs)\">\n" +
    "{{showDCEnvs ? 'Hide' : 'Show'}} image environment variables\n" +
    "</a>\n" +
    "</p>\n" +
    "<div ng-show=\"showDCEnvs\">\n" +
    "<div class=\"help-block\">\n" +
    "<p>These variables exist on the image and will be available at runtime. You may override them below.</p>\n" +
    "</div>\n" +
    "<key-value-editor entries=\"DCEnvVarsFromImage\" is-readonly cannot-add cannot-sort cannot-delete></key-value-editor>\n" +
    "</div>\n" +
    "<key-value-editor entries=\"DCEnvVarsFromUser\" key-placeholder=\"name\" value-placeholder=\"value\" key-validator=\"[a-zA-Z][a-zA-Z0-9_]*\" key-validator-error-tooltip=\"A valid environment variable name is an alphanumeric (a-z and 0-9) string beginning with a letter that may contain underscores.\" add-row-link=\"Add environment variable\"></key-value-editor>\n" +
    "</div>\n" +
    "</div>\n" +
    "</osc-form-section>\n" +
    "\n" +
    "<osc-form-section header=\"Scaling\" about-title=\"Scaling\" about=\"Scaling defines the number of running instances of your built image.\" expand=\"true\" can-toggle=\"false\">\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"scale-type\">Strategy</label>\n" +
    "<select ng-model=\"scaling.autoscale\" ng-options=\"option.value as option.label for option in scaling.autoscaleOptions\" id=\"scale-type\" class=\"form-control\" aria-describedby=\"scale-type-help\">\n" +
    "</select>\n" +
    "<div class=\"help-block\" id=\"scale-type-help\">\n" +
    "Scale replicas manually or automatically based on CPU usage.\n" +
    "</div>\n" +
    "<div class=\"learn-more-block\">\n" +
    "<a href=\"{{'pod_autoscaling' | helpLink}}\" target=\"_blank\">Learn more <i class=\"fa fa-external-link\" aria-hidden> </i></a>\n" +
    "</div>\n" +
    "<div class=\"has-warning\" ng-if=\"metricsWarning && scaling.autoscale\">\n" +
    "<span class=\"help-block\">\n" +
    "CPU metrics might not be available. In order to use horizontal pod autoscalers, your cluster administrator must have properly configured cluster metrics.\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-group\" ng-if=\"!scaling.autoscale\">\n" +
    "<label class=\"number\">Replicas</label>\n" +
    "<input type=\"number\" class=\"form-control\" min=\"0\" name=\"replicas\" ng-model=\"scaling.replicas\" ng-required=\"!scaling.autoscale\" ng-disabled=\"scaling.autoscale\" ng-pattern=\"/^\\d+$/\" aria-describedby=\"replicas-help\">\n" +
    "<div id=\"replicas-help\">\n" +
    "<span class=\"help-block\">The number of instances of your image.</span>\n" +
    "</div>\n" +
    "<div class=\"has-error\" ng-show=\"form.replicas.$dirty && form.replicas.$invalid\">\n" +
    "<span class=\"help-block\">Replicas must be an integer value greater than or equal to 0.</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<osc-autoscaling ng-if=\"scaling.autoscale\" model=\"scaling\" project=\"project\">\n" +
    "</osc-autoscaling>\n" +
    "<div class=\"has-warning\" ng-if=\"showCPURequestWarning\">\n" +
    "<span class=\"help-block\">\n" +
    "You should configure resource limits below for autoscaling. Autoscaling will not work without a CPU\n" +
    "<span ng-if=\"'cpu' | isRequestCalculated : project\">limit.</span>\n" +
    "<span ng-if=\"!('cpu' | isRequestCalculated : project)\">request.</span>\n" +
    "<span ng-if=\"'cpu' | isLimitCalculated : project\">\n" +
    "The CPU limit will be automatically calculated from the container memory limit.\n" +
    "</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "</osc-form-section>\n" +
    "\n" +
    "<osc-form-section header=\"Resource Limits\" about-title=\"Resource Limits\" about=\"Resource limits control compute resource usage by a container on a node.\" expand=\"true\" can-toggle=\"false\">\n" +
    "<edit-request-limit resources=\"container.resources\" type=\"cpu\" limit-ranges=\"limitRanges\" project=\"project\">\n" +
    "</edit-request-limit>\n" +
    "<edit-request-limit resources=\"container.resources\" type=\"memory\" limit-ranges=\"limitRanges\" project=\"project\">\n" +
    "</edit-request-limit>\n" +
    "<div ng-repeat=\"problem in cpuProblems\" class=\"has-error\">\n" +
    "<span class=\"help-block\">{{problem}}</span>\n" +
    "</div>\n" +
    "<div ng-repeat=\"problem in memoryProblems\" class=\"has-error\">\n" +
    "<span class=\"help-block\">{{problem}}</span>\n" +
    "</div>\n" +
    "</osc-form-section>\n" +
    "\n" +
    "<label-editor labels=\"userDefinedLabels\" system-labels=\"systemLabels\" expand=\"true\" can-toggle=\"false\" help-text=\"Each label is applied to each created resource.\">\n" +
    "</label-editor>\n" +
    "</div>\n" +
    "<div class=\"buttons gutter-top-bottom gutter-top-bottom-2x\">\n" +
    "\n" +
    "<button type=\"submit\" class=\"btn btn-primary btn-lg\" ng-disabled=\"form.$invalid || nameTaken || cpuProblems.length || memoryProblems.length || disableInputs\">Create</button>\n" +
    "<a class=\"btn btn-default btn-lg\" href=\"{{projectName | projectOverviewURL}}\">Cancel</a>\n" +
    "</div>\n" +
    "</form>\n" +
    "<div ng-hide=\"imageStream\">\n" +
    "{{ emptyMessage }}\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/create/next-steps.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"middle surface-shaded\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container surface-shaded next-steps\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<div ng-controller=\"TasksController\">\n" +
    "<h1 ng-if=\"!tasks().length\">Completed. <a href=\"project/{{projectName}}/overview\">Go to overview</a>.</h1>\n" +
    "<h1 ng-if=\"tasks().length && allTasksSuccessful(tasks())\">Application created. <a href=\"project/{{projectName}}/overview\">Continue to overview</a>.</h1>\n" +
    "<h1 ng-if=\"pendingTasks(tasks()).length\">Creating...</h1>\n" +
    "<h1 ng-if=\"!pendingTasks(tasks()).length && erroredTasks(tasks()).length\">Completed, with errors</h1>\n" +
    "<div ng-repeat=\"task in tasks()\" ng-if=\"tasks().length && !allTasksSuccessful(tasks())\">\n" +
    "<div class=\"tasks\" ng-class=\"hasTaskWithError() ? 'failure' : 'success'\">\n" +
    "<div class=\"task-content\">\n" +
    "<i class=\"pficon task-icon\" ng-class=\"task.hasErrors ? 'pficon-error-circle-o' : 'pficon-ok'\"></i>\n" +
    "<div class=\"task-info\">\n" +
    "<h3>\n" +
    "{{ task | taskTitle }}.\n" +
    "</h3>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"alerts\">\n" +
    "<div ng-repeat=\"alert in task.alerts\">\n" +
    "<div ng-switch=\"alert.type\">\n" +
    "<div ng-switch-when=\"error\" class=\"alert alert-danger\">\n" +
    "<span class=\"pficon pficon-error-circle-o\"></span>\n" +
    "<span ng-if=\"alert.message\">{{alert.message}}</span><span ng-if=\"alert.details\">{{alert.details}}.</span>\n" +
    "</div>\n" +
    "<div ng-switch-when=\"warning\" class=\"alert alert-warning\">\n" +
    "<span class=\"pficon pficon-warning-triangle-o\"></span>\n" +
    "<span ng-if=\"alert.message\">{{alert.message}}</span><span ng-if=\"alert.details\">{{alert.details}}.</span>\n" +
    "</div>\n" +
    "<div ng-switch-when=\"success\" class=\"alert alert-success\">\n" +
    "<span class=\"pficon pficon-ok\"></span>\n" +
    "<span ng-if=\"alert.message\">{{alert.message}}</span><span ng-if=\"alert.details\">{{alert.details}}.</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"template-message\" ng-if=\"templateMessage.length\">\n" +
    "<span class=\"pficon pficon-info\" aria-hidden=\"true\"></span>\n" +
    "<div class=\"resource-description\" ng-bind-html=\"templateMessage | linky\"></div>\n" +
    "</div>\n" +
    "<div class=\"row\" ng-controller=\"TasksController\">\n" +
    "<div ng-if=\"!pendingTasks(tasks()).length && erroredTasks(tasks()).length\" class=\"col-md-12\">\n" +
    "<h2>Things you can do</h2>\n" +
    "<p>Go to the <a href=\"project/{{projectName}}/overview\">overview page</a> to see more details about this project. Make sure you don't already have <a href=\"project/{{projectName}}/browse/services\">services</a>, <a href=\"project/{{projectName}}/browse/builds\">build configs</a>, <a href=\"project/{{projectName}}/browse/deployments\">deployment configs</a>, or other resources with the same names you are trying to create. Refer to the <a target=\"_blank\" href=\"{{'new_app' | helpLink}}\">documentation for creating new applications</a> for more information.</p>\n" +
    "<h3>Command line tools</h3>\n" +
    "<p>You may want to use the <code>oc</code> command line tool to help with troubleshooting. After <a target=\"_blank\" href=\"command-line\">downloading and installing</a> it, you can log in, switch to this particular project, and try some commands :</p>\n" +
    "<pre class=\"code prettyprint\">oc login {{loginBaseUrl}}\n" +
    "oc project {{projectName}}\n" +
    "oc logs -h</pre>\n" +
    "<p>For more information about the command line tools, check the <a target=\"_blank\" href=\"{{'cli' | helpLink}}\">CLI Reference</a> and <a target=\"_blank\" href=\"{{'basic_cli_operations' | helpLink}}\">Basic CLI Operations</a>.</p>\n" +
    "</div>\n" +
    "<div ng-if=\"allTasksSuccessful(tasks())\" ng-class=\"createdBuildConfigWithGitHubTrigger() ? 'col-md-6' : 'col-md-12'\">\n" +
    "<h2>Manage your app</h2>\n" +
    "<p>The web console is convenient, but if you need deeper control you may want to try our command line tools.</p>\n" +
    "<h3>Command line tools</h3>\n" +
    "<p><a target=\"_blank\" href=\"command-line\">Download and install</a> the <code>oc</code> command line tool. After that, you can start by logging in, switching to this particular project, and displaying an overview of it, by doing:</p>\n" +
    "<pre class=\"code prettyprint\">oc login {{loginBaseUrl}}\n" +
    "oc project {{projectName}}\n" +
    "oc status</pre>\n" +
    "<p>For more information about the command line tools, check the <a target=\"_blank\" href=\"{{'cli' | helpLink}}\">CLI Reference</a> and <a target=\"_blank\" href=\"{{'basic_cli_operations' | helpLink}}\">Basic CLI Operations</a>.</p>\n" +
    "</div>\n" +
    "<div ng-if=\"createdBuildConfig\" class=\"col-md-6\">\n" +
    "<h2>Making code changes</h2>\n" +
    "<p ng-if=\"fromSampleRepo\">\n" +
    "You are set up to use the example git repository. If you would like to modify the source code, fork the <osc-git-link uri=\"createdBuildConfig.spec.source.git.uri\">{{createdBuildConfig.spec.source.git.uri}}</osc-git-link> repository to an OpenShift-visible git account and <a href=\"{{createdBuildConfig | editResourceURL}}\">edit the <strong>{{createdBuildConfig.metadata.name}}</strong> build config</a> to point to your fork.\n" +
    "<span ng-if=\"createdBuildConfigWithConfigChangeTrigger()\">Note that this will start a new build.</span>\n" +
    "</p>\n" +
    "<div ng-repeat=\"trigger in createdBuildConfig.spec.triggers\" ng-if=\"trigger.type == 'GitHub'\">\n" +
    "<p>\n" +
    "A GitHub <a target=\"_blank\" href=\"{{'webhooks' | helpLink}}\">webhook trigger</a> has been created for the <strong>{{createdBuildConfig.metadata.name}}</strong> build config.\n" +
    "</p>\n" +
    "<p ng-if=\"fromSampleRepo\">\n" +
    "You can configure the webhook in the forked repository's settings, using the following payload URL:\n" +
    "</p>\n" +
    "<p ng-if=\"!fromSampleRepo\">\n" +
    "<span ng-if=\"createdBuildConfig.spec.source.git.uri | isGithubLink\">\n" +
    "You can now set up the webhook in the GitHub repository settings if you own it, in <a target=\"_blank\" class=\"word-break\" href=\"{{createdBuildConfig.spec.source.git.uri | githubLink}}/settings/hooks\">{{createdBuildConfig.spec.source.git.uri | githubLink}}/settings/hooks</a>, using the following payload URL:\n" +
    "</span>\n" +
    "<span ng-if=\"!(createdBuildConfig.spec.source.git.uri | isGithubLink)\">\n" +
    "Your source does not appear to be a URL to a GitHub repository. If you have a GitHub repository that you want to trigger this build from then use the following payload URL:\n" +
    "</span>\n" +
    "</p>\n" +
    "<copy-to-clipboard clipboard-text=\"createdBuildConfig.metadata.name | webhookURL : trigger.type : trigger.github.secret : projectName\"></copy-to-clipboard>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"parameters.all.length\">\n" +
    "<h2>Applied Parameter Values</h2>\n" +
    "<p>These parameters often include things like passwords. If you will need to reference these values later, copy them to a safe location.\n" +
    "<span ng-if=\"parameters.generated.length > 1\">Parameters <span ng-repeat=\"paramName in parameters.generated\">{{paramName}}<span ng-if=\"!$last\">, </span></span> were generated automatically.</span>\n" +
    "<span ng-if=\"parameters.generated.length === 1\">Parameter {{parameters.generated[0]}} was generated automatically.</span>\n" +
    "</p>\n" +
    "<div ng-if=\"!showParamsTable\" class=\"center\">\n" +
    "<a href=\"\" ng-click=\"toggleParamsTable()\">Show parameter values</a>\n" +
    "</div>\n" +
    "<key-value-editor ng-if=\"showParamsTable\" entries=\"parameters.all\" key-placeholder=\"Name\" value-placeholder=\"Value\" cannot-add cannot-delete cannot-sort show-header is-readonly></key-value-editor>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/deployments.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header header-light\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"page-header page-header-bleed-right page-header-bleed-left\">\n" +
    "<h1>Deployments</h1>\n" +
    "</div>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"!renderOptions.showGetStarted\" class=\"data-toolbar\">\n" +
    "<div class=\"data-toolbar-filter\">\n" +
    "<project-filter></project-filter>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\" ng-class=\"{ 'gutter-top': !(k8sDeployments | hashSize) && !(replicaSets | hashSize) }\">\n" +
    "<h3 ng-if=\"(k8sDeployments | hashSize) || (replicaSets | hashSize)\">Deployment Configurations</h3>\n" +
    "<table class=\"table table-bordered table-hover table-mobile\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Name</th>\n" +
    "<th>Last Version</th>\n" +
    "<th>Status</th>\n" +
    "<th>Created</th>\n" +
    "<th>Trigger</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "\n" +
    "<tbody ng-if=\"showEmptyMessage()\">\n" +
    "\n" +
    "<tr><td colspan=\"5\"><em>{{emptyMessage}}</em></td></tr>\n" +
    "</tbody>\n" +
    "<tbody ng-repeat=\"(deploymentConfigName, deploymentConfigDeployments) in deploymentsByDeploymentConfig\" ng-if=\"deploymentConfigName && (deploymentConfigs[deploymentConfigName] || !unfilteredDeploymentConfigs[deploymentConfigName])\">\n" +
    "\n" +
    "<tr ng-if=\"(deploymentConfigDeployments | hashSize) == 0 && deploymentConfigName\">\n" +
    "<td data-title=\"Name\">\n" +
    "<a ng-if=\"deploymentConfigs[deploymentConfigName]\" href=\"{{deploymentConfigName | navigateResourceURL : 'DeploymentConfig' : projectName}}\">{{deploymentConfigName}}</a>\n" +
    "<span ng-if=\"deploymentConfigs[deploymentConfigName].status.details.message\" class=\"pficon pficon-warning-triangle-o\" style=\"cursor: help\" data-toggle=\"popover\" data-trigger=\"hover\" dynamic-content=\"{{deploymentConfigs[deploymentConfigName].status.details.message}}\"></span>\n" +
    "</td>\n" +
    "<td data-title=\"Last Version\"><em>No deployments</em></td>\n" +
    "<td class=\"hidden-xs\">&nbsp;</td>\n" +
    "<td class=\"hidden-xs\">&nbsp;</td>\n" +
    "<td class=\"hidden-xs\">&nbsp;</td>\n" +
    "</tr>\n" +
    "\n" +
    "<tr ng-repeat=\"deployment in deploymentConfigDeployments | orderObjectsByDate : true | limitTo : 1\" ng-if=\"deploymentConfigName\">\n" +
    "<td data-title=\"Name\">\n" +
    "<a href=\"{{deploymentConfigName | navigateResourceURL : 'DeploymentConfig' : deployment.metadata.namespace}}\">{{deploymentConfigName}}</a>\n" +
    "\n" +
    "<span ng-if=\"deploymentConfigs && !deploymentConfigs[deploymentConfigName]\" class=\"pficon pficon-warning-triangle-o\" data-toggle=\"tooltip\" title=\"This deployment config no longer exists\" style=\"cursor: help\"></span>\n" +
    "</td>\n" +
    "<td data-title=\"Last Version\">\n" +
    "\n" +
    "<span ng-if=\"deployment | annotation : 'deploymentVersion'\">\n" +
    "<a ng-href=\"{{deployment | navigateResourceURL}}\">#{{deployment | annotation : 'deploymentVersion'}}</a>\n" +
    "</span>\n" +
    "<span ng-if=\"!(deployment | annotation : 'deploymentVersion')\">\n" +
    "<a ng-href=\"{{deployment | navigateResourceURL}}\">{{deployment.metadata.name}}</a>\n" +
    "</span>\n" +
    "</td>\n" +
    "<td data-title=\"Status\">\n" +
    "<div row class=\"status\">\n" +
    "<status-icon status=\"deployment | deploymentStatus\" disable-animation fixed-width=\"true\"></status-icon>\n" +
    "<span flex>\n" +
    "{{deployment | deploymentStatus}}<span ng-if=\"(deployment | deploymentStatus) == 'Active' || (deployment | deploymentStatus) == 'Running'\">,\n" +
    "<span ng-if=\"deployment.spec.replicas !== deployment.status.replicas\">{{deployment.status.replicas}}/</span>{{deployment.spec.replicas}} replica<span ng-if=\"deployment.spec.replicas != 1\">s</span></span>\n" +
    "</span>\n" +
    "</div>\n" +
    "\n" +
    "</td>\n" +
    "<td data-title=\"Created\">\n" +
    "<relative-timestamp timestamp=\"deployment.metadata.creationTimestamp\"></relative-timestamp>\n" +
    "</td>\n" +
    "<td data-title=\"Trigger\">\n" +
    "<span ng-if=\"!deployment.causes.length\">Unknown</span>\n" +
    "<span ng-if=\"deployment.causes.length\">\n" +
    "<span ng-repeat=\"cause in deployment.causes\">\n" +
    "<span ng-switch=\"cause.type\">\n" +
    "<span ng-switch-when=\"ImageChange\">\n" +
    "<span ng-if=\"cause.imageTrigger.from\">\n" +
    "<abbr title=\"{{cause.imageTrigger.from | imageObjectRef : null : true}}\">Image</abbr> change\n" +
    "</span>\n" +
    "</span>\n" +
    "<span ng-switch-when=\"ConfigChange\">Config change</span>\n" +
    "<span ng-switch-default>{{cause.type}}</span>\n" +
    "</span>\n" +
    "</span>\n" +
    "</span>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "<div ng-if=\"k8sDeployments | hashSize\">\n" +
    "<h3>Deployments</h3>\n" +
    "<table class=\"table table-bordered table-hover table-mobile\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Name</th>\n" +
    "<th>Last Version</th>\n" +
    "<th>Replicas</th>\n" +
    "<th>Created</th>\n" +
    "<th>Strategy</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody ng-repeat=\"k8sDeployment in k8sDeployments | orderObjectsByDate : true\">\n" +
    "<tr>\n" +
    "<td data-title=\"Name\">\n" +
    "<a ng-href=\"{{k8sDeployment | navigateResourceURL}}\">{{k8sDeployment.metadata.name}}</a>\n" +
    "</td>\n" +
    "<td data-title=\"Last Version\">\n" +
    "{{k8sDeployment | lastDeploymentRevision}}\n" +
    "</td>\n" +
    "<td data-title=\"Replicas\">\n" +
    "<span ng-if=\"k8sDeployment.status.replicas !== k8sDeployment.spec.replicas\">{{k8sDeployment.status.replicas}}/</span>{{k8sDeployment.spec.replicas}} replica<span ng-if=\"k8sDeployment.spec.replicas != 1\">s</span>\n" +
    "</td>\n" +
    "<td data-title=\"Created\">\n" +
    "<relative-timestamp timestamp=\"k8sDeployment.metadata.creationTimestamp\"></relative-timestamp>\n" +
    "</td>\n" +
    "<td data-title=\"Strategy\">\n" +
    "{{k8sDeployment.spec.strategy.type | sentenceCase}}\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "<div ng-if=\"replicaSets | hashSize\" id=\"replica-sets\">\n" +
    "<h3>Replica Sets</h3>\n" +
    "<table class=\"table table-bordered table-hover table-mobile\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Name</th>\n" +
    "<th>Replicas</th>\n" +
    "<th>Created</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody ng-repeat=\"replicaSet in replicaSets | orderObjectsByDate : true\">\n" +
    "<tr>\n" +
    "<td data-title=\"Name\">\n" +
    "<a ng-href=\"{{replicaSet | navigateResourceURL}}\">{{replicaSet.metadata.name}}</a>\n" +
    "</td>\n" +
    "<td data-title=\"Replicas\">\n" +
    "<span ng-if=\"replicaSet.status.replicas !== replicaSet.spec.replicas\">{{replicaSet.status.replicas}}/</span>{{replicaSet.spec.replicas}} replica<span ng-if=\"replicaSet.spec.replicas != 1\">s</span>\n" +
    "</td>\n" +
    "<td data-title=\"Created\">\n" +
    "<relative-timestamp timestamp=\"replicaSet.metadata.creationTimestamp\"></relative-timestamp>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "<div ng-if=\"(unfilteredReplicationControllers | hashSize) > 0\" id=\"replica-controllers\">\n" +
    "<h3>Other Replication Controllers</h3>\n" +
    "<table class=\"table table-bordered table-hover table-mobile\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Name</th>\n" +
    "<th>Replicas</th>\n" +
    "<th>Created</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody ng-if=\"(deploymentsByDeploymentConfig[''] | hashSize) === 0\"><tr><td colspan=\"3\"><em>No replication controllers to show</em></td></tr></tbody>\n" +
    "<tbody ng-repeat=\"deployment in deploymentsByDeploymentConfig[''] | orderObjectsByDate : true\">\n" +
    "\n" +
    "<tr>\n" +
    "<td data-title=\"Name\">\n" +
    "<a ng-href=\"{{deployment | navigateResourceURL}}\">{{deployment.metadata.name}}</a>\n" +
    "</td>\n" +
    "<td data-title=\"Replicas\">\n" +
    "<span ng-if=\"deployment.status.replicas !== deployment.spec.replicas\">{{deployment.status.replicas}}/</span>{{deployment.spec.replicas}} replica<span ng-if=\"deployment.spec.replicas != 1\">s</span>\n" +
    "</td>\n" +
    "<td data-title=\"Created\">\n" +
    "<relative-timestamp timestamp=\"deployment.metadata.creationTimestamp\"></relative-timestamp>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/directives/_build-close.html',
    "<button ng-hide=\"build | isIncompleteBuild\" ng-click=\"onHideBuild()\" type=\"button\" class=\"close\">\n" +
    "<span class=\"pficon pficon-close\" aria-hidden=\"true\"></span>\n" +
    "<span class=\"sr-only\">Dismiss</span>\n" +
    "</button>"
  );


  $templateCache.put('views/directives/_build-pipeline-collapsed.html',
    "<div class=\"build-pipeline-collapsed\" ng-show=\"!hideBuild\">\n" +
    "<div class=\"build-summary\" ng-class=\"{'dismissible' : !(build | isIncompleteBuild)}\">\n" +
    "<div class=\"build-name\">\n" +
    "Pipeline\n" +
    "<a ng-href=\"{{build | configURLForResource}}\">{{buildConfigName}}</a>,\n" +
    "<a ng-href=\"{{build | navigateResourceURL}}\">#{{build | annotation : 'buildNumber'}}</a>\n" +
    "</div>\n" +
    "<div class=\"build-phase\">\n" +
    "<status-icon status=\"build.status.phase\"></status-icon>\n" +
    "{{build.status.phase}}\n" +
    "</div>\n" +
    "<relative-timestamp timestamp=\"build.metadata.creationTimestamp\" class=\"build-timestamp\"></relative-timestamp>\n" +
    "<div ng-include=\"'views/directives/_build-pipeline-links.html'\" class=\"build-links\"></div>\n" +
    "<build-close build=\"build\" hide-build=\"hideBuild\"></build-close>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/_build-pipeline-expanded.html',
    "<div flex class=\"build-pipeline\">\n" +
    "<div class=\"build-summary\">\n" +
    "<div ng-if=\"buildConfigNameOnExpanded\" class=\"build-name\">\n" +
    "<a ng-href=\"{{build | configURLForResource}}\">{{buildConfigName}}</a>\n" +
    "</div>\n" +
    "<div class=\"build-phase\">\n" +
    "<span class=\"status-icon\" ng-class=\"build.status.phase\">\n" +
    "<span ng-switch=\"build.status.phase\" class=\"hide-ng-leave\">\n" +
    "<span ng-switch-when=\"Complete\" aria-hidden=\"true\">\n" +
    "<i class=\"fa fa-check-circle\"></i>\n" +
    "</span>\n" +
    "<span ng-switch-when=\"Failed\" aria-hidden=\"true\">\n" +
    "<i class=\"fa fa-times-circle\"></i>\n" +
    "</span>\n" +
    "<span ng-switch-default>\n" +
    "<status-icon status=\"build.status.phase\"></status-icon>\n" +
    "</span>\n" +
    "</span>\n" +
    "</span>\n" +
    "<a ng-href=\"{{build | navigateResourceURL}}\">Build #{{build | annotation : 'buildNumber'}}</a>\n" +
    "</div>\n" +
    "<relative-timestamp timestamp=\"build.metadata.creationTimestamp\" class=\"build-timestamp\"></relative-timestamp>\n" +
    "<div ng-include=\"'views/directives/_build-pipeline-links.html'\" class=\"build-links\"></div>\n" +
    "</div>\n" +
    "<div class=\"pipeline-container\">\n" +
    "<div class=\"pipeline\" ng-if=\"!jenkinsStatus.stages.length\">\n" +
    "<div class=\"pipeline-stage no-stages\">\n" +
    "<div class=\"pipeline-stage-name\">No stages have started.</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"pipeline\">\n" +
    "<div class=\"pipeline-stage\" ng-repeat=\"stage in jenkinsStatus.stages track by stage.id\">\n" +
    "<div column class=\"pipeline-stage-column\">\n" +
    "<div class=\"pipeline-stage-name\" ng-class=\"build.status.phase\">\n" +
    "{{stage.name}}\n" +
    "</div>\n" +
    "<pipeline-status ng-if=\"stage.status\" status=\"stage.status\"></pipeline-status>\n" +
    "<div class=\"pipeline-actions\" ng-if=\"stage | pipelineStagePendingInput\">\n" +
    "<a ng-href=\"{{build | jenkinsInputURL}}\" target=\"_blank\">Input Required</a>\n" +
    "</div>\n" +
    "<div class=\"pipeline-time\" ng-class=\"stage.status\" ng-if=\"stage.durationMillis && !(stage | pipelineStagePendingInput)\">{{stage.durationMillis | timeOnlyDuration}}</div>\n" +
    "<div class=\"pipeline-time\" ng-class=\"stage.status\" ng-if=\"!stage.durationMillis && !(stage | pipelineStagePendingInput)\">not started</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/_build-pipeline-links.html',
    "<div ng-if=\"(build | buildLogURL) && ('builds/log' | canI : 'get')\" class=\"pipeline-link\"><a ng-href=\"{{build | buildLogURL}}\" target=\"_blank\">View Log</a></div>"
  );


  $templateCache.put('views/directives/_click-to-reveal.html',
    "<a class=\"reveal-contents-link\" href=\"javascript:;\">{{linkText || \"Show\"}}</a>\n" +
    "<span style=\"display: none\" class=\"reveal-contents\" ng-transclude></span>"
  );


  $templateCache.put('views/directives/_copy-to-clipboard.html',
    "<div class=\"input-group copy-to-clipboard\">\n" +
    "<input id=\"{{id}}\" type=\"text\" class=\"form-control\" value=\"{{clipboardText}}\" ng-disabled=\"isDisabled\" ng-readonly=\"!isDisabled\" select-on-focus>\n" +
    "<span class=\"input-group-btn\" ng-hide=\"hidden\">\n" +
    "<a data-clipboard-target=\"#{{id}}\" ng-disabled=\"isDisabled\" data-toggle=\"tooltip\" title=\"Copy to clipboard\" role=\"button\" class=\"btn btn-default\"><i class=\"fa fa-clipboard\"/></a>\n" +
    "</span>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/_custom-icon.html',
    "<span ng-if=\"!isDataIcon\" aria-hidden=\"true\" class=\"font-icon {{icon}}\"></span>\n" +
    "<img ng-if=\"isDataIcon\" alt=\"\" ng-src=\"{{icon}}\">"
  );


  $templateCache.put('views/directives/_edit-command.html',
    "<ng-form name=\"form\">\n" +
    "<p ng-hide=\"input.args.length\"><em>No command set.</em></p>\n" +
    "<p ng-show=\"input.args.length\" as-sortable ng-model=\"input.args\" class=\"command-args\">\n" +
    "<span ng-repeat=\"arg in input.args\" as-sortable-item class=\"form-group\">\n" +
    "<span class=\"input-group\">\n" +
    "\n" +
    "<input type=\"text\" ng-model=\"arg.value\" ng-if=\"!arg.multiline\" required class=\"form-control\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck>\n" +
    "\n" +
    "<textarea ng-model=\"arg.value\" ng-if=\"arg.multiline\" rows=\"5\" required class=\"form-control\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck>\n" +
    "        </textarea>\n" +
    "<span as-sortable-item-handle class=\"input-group-addon action-button drag-handle\">\n" +
    "<i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n" +
    "</span>\n" +
    "<a href=\"\" ng-click=\"removeArg($index)\" class=\"input-group-addon action-button remove-arg\" title=\"Remove argument\">\n" +
    "<span class=\"sr-only\">Remove argument</span>\n" +
    "<i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n" +
    "</a>\n" +
    "</span>\n" +
    "</span>\n" +
    "</p>\n" +
    "<div class=\"form-group\">\n" +
    "<label class=\"sr-only\" ng-attr-for=\"{{id}}-add-arg\">Add Argument</label>\n" +
    "\n" +
    "<span ng-show=\"!multiline\" class=\"input-group\">\n" +
    "<input type=\"text\" ng-model=\"nextArg\" name=\"nextArg\" ng-attr-id=\"{{id}}-add-arg\" on-enter=\"addArg()\" placeholder=\"Add argument\" class=\"form-control\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck>\n" +
    "<span class=\"input-group-btn\">\n" +
    "\n" +
    "<a class=\"btn btn-default\" href=\"\" ng-click=\"addArg()\" ng-disabled=\"!nextArg\" ng-attr-aria-disabled=\"!nextArg\" role=\"button\">Add</a>\n" +
    "</span>\n" +
    "</span>\n" +
    "\n" +
    "<span ng-show=\"multiline\">\n" +
    "<textarea ng-model=\"nextArg\" name=\"nextArg\" rows=\"10\" ng-attr-id=\"{{id}}-add-arg\" placeholder=\"Add argument\" class=\"form-control\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck>\n" +
    "      </textarea>\n" +
    "<div class=\"mar-top-md\">\n" +
    "<a class=\"btn btn-default\" href=\"\" ng-click=\"addArg()\" ng-disabled=\"!nextArg\" ng-attr-aria-disabled=\"!nextArg\" role=\"button\">Add</a>\n" +
    "</div>\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class=\"help-block\">\n" +
    "Enter the command to run inside the container. The command is considered successful if its exit code is 0. Drag and drop command arguments to reorder them.\n" +
    "</div>\n" +
    "<div class=\"mar-top-sm mar-bottom-md\">\n" +
    "<a href=\"\" ng-click=\"multiline = !multiline\">Switch to {{multiline ? 'single-line' : 'multiline'}} editor</a>\n" +
    "<span ng-show=\"input.args.length\">\n" +
    "<span class=\"action-divider\">|</span>\n" +
    "<a href=\"\" ng-click=\"clear()\" role=\"button\">Clear command</a>\n" +
    "</span>\n" +
    "</div>\n" +
    "\n" +
    "<input type=\"hidden\" name=\"command\" ng-model=\"input.args\" ng-required=\"isRequired\">\n" +
    "<div ng-if=\"form.command.$dirty && form.command.$error.required\" class=\"has-error\">\n" +
    "<span class=\"help-block\">A command is required.</span>\n" +
    "</div>\n" +
    "</ng-form>"
  );


  $templateCache.put('views/directives/_edit-probe.html',
    "<ng-form name=\"form\">\n" +
    "<div class=\"form-group\">\n" +
    "<label ng-attr-for=\"{{id}}-type\" class=\"required\">Type</label>\n" +
    "<select ng-model=\"type\" ng-attr-id=\"{{id}}-type\" required class=\"form-control\">\n" +
    "<option value=\"httpGet\">HTTP</option>\n" +
    "<option value=\"exec\">Container Command</option>\n" +
    "<option value=\"tcpSocket\">TCP Socket</option>\n" +
    "</select>\n" +
    "</div>\n" +
    "<fieldset ng-if=\"type === 'httpGet'\">\n" +
    "<div class=\"form-group\">\n" +
    "<label ng-attr-for=\"{{id}}-path\">Path</label>\n" +
    "<div>\n" +
    "<input ng-attr-id=\"{{id}}-path\" ng-model=\"probe.httpGet.path\" type=\"text\" placeholder=\"/\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck class=\"form-control\">\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<label ng-attr-for=\"{{id}}-http-port\" class=\"required\">Port</label>\n" +
    "<select id=\"{{id}}-http-port\" ng-model=\"probe.httpGet.port\" ng-options=\"port.containerPort as port.containerPort for port in tcpPorts\" required class=\"form-control\">\n" +
    "</select>\n" +
    "<div ng-if=\"!tcpPorts.length\" class=\"has-error\">\n" +
    "<span class=\"help-block\">Container has no TCP ports.</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "<fieldset ng-if=\"type === 'exec'\">\n" +
    "<label class=\"required\">Command</label>\n" +
    "<edit-command args=\"probe.exec.command\" is-required=\"true\"></edit-command>\n" +
    "</fieldset>\n" +
    "<fieldset ng-if=\"type === 'tcpSocket'\">\n" +
    "<div class=\"form-group\">\n" +
    "<label ng-attr-for=\"{{id}}-tcp-port\" class=\"required\">Port</label>\n" +
    "<select id=\"{{id}}-tcp-port\" ng-model=\"probe.tcpSocket.port\" ng-options=\"port.containerPort as port.containerPort for port in tcpPorts\" required class=\"form-control\">\n" +
    "</select>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "<div class=\"form-group\">\n" +
    "<label ng-attr-for=\"{{id}}-initial-delay\">Initial Delay</label>\n" +
    "<span class=\"input-group\" ng-class=\"{ 'has-error': form.initialDelaySeconds.$invalid && form.initialDelaySeconds.$touched }\">\n" +
    "<input type=\"number\" name=\"initialDelaySeconds\" ng-model=\"probe.initialDelaySeconds\" ng-pattern=\"/^\\d+$/\" min=\"0\" select-on-focus ng-attr-id=\"{{id}}-initial-delay\" class=\"form-control\" ng-attr-aria-describedby=\"{{id}}-delay-description\">\n" +
    "<span class=\"input-group-addon\">seconds</span>\n" +
    "</span>\n" +
    "<div class=\"help-block\" ng-attr-id=\"{{id}}-delay-description\">\n" +
    "How long to wait after the container starts before checking its health.\n" +
    "</div>\n" +
    "<div ng-if=\"form.initialDelaySeconds.$invalid && form.initialDelaySeconds.$touched\" class=\"has-error\">\n" +
    "<div ng-if=\"form.initialDelaySeconds.$error.number\" class=\"help-block\">\n" +
    "Must be a number.\n" +
    "</div>\n" +
    "<div ng-if=\"form.initialDelaySeconds.$error.min\" class=\"help-block\">\n" +
    "Delay can't be negative.\n" +
    "</div>\n" +
    "<span ng-if=\"form.initialDelaySeconds.$error.pattern && !form.initialDelaySeconds.$error.min\" class=\"help-block\">\n" +
    "Must be a whole number.\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<label ng-attr-for=\"{{id}}-timeout\">Timeout</label>\n" +
    "<span class=\"input-group\" ng-class=\"{ 'has-error': form.timeoutSeconds.$invalid && form.timeoutSeconds.$touched }\">\n" +
    "<input type=\"number\" name=\"timeoutSeconds\" ng-model=\"probe.timeoutSeconds\" ng-pattern=\"/^\\d+$/\" min=\"1\" placeholder=\"1\" select-on-focus ng-attr-id=\"{{id}}-timeout\" class=\"form-control\" ng-attr-aria-describedby=\"{{id}}-timeout-description\">\n" +
    "<span class=\"input-group-addon\">seconds</span>\n" +
    "</span>\n" +
    "<div class=\"help-block\" ng-attr-id=\"{{id}}-timeout-description\">\n" +
    "How long to wait for the probe to finish. If the time is exceeded, the probe is considered failed.\n" +
    "</div>\n" +
    "<div ng-if=\"form.timeoutSeconds.$invalid && form.timeoutSeconds.$touched\" class=\"has-error\">\n" +
    "<div ng-if=\"form.timeoutSeconds.$error.number\" class=\"help-block\">\n" +
    "Must be a number.\n" +
    "</div>\n" +
    "<div ng-if=\"form.timeoutSeconds.$error.min\" class=\"help-block\">\n" +
    "Timeout must be greater than or equal to one.\n" +
    "</div>\n" +
    "<span ng-if=\"form.timeoutSeconds.$error.pattern && !form.timeoutSeconds.$error.min\" class=\"help-block\">\n" +
    "Must be a whole number.\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</ng-form>"
  );


  $templateCache.put('views/directives/_ellipsis-loader.html',
    "<div class=\"ellipsis-loader dots\"><div></div></div>"
  );


  $templateCache.put('views/directives/_ellipsis-pulser.html',
    "<div class=\"ellipsis-pulser ellipsis-{{size || 'md'}} ellipsis-{{color || 'dark'}} ellipsis-{{display || 'block'}}\">\n" +
    "<span ng-if=\"msg\" class=\"ellipsis-msg\">{{msg}}</span>\n" +
    "<div class=\"dot pulse\"></div>\n" +
    "<div class=\"dot pulse\"></div>\n" +
    "<div class=\"dot pulse\"></div>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/_pod-content.html',
    "<div class=\"pod-text\" ng-switch=\"pod.status.phase\">\n" +
    "<strong class=\"pod-status-label\">{{pod.status.phase}}</strong>\n" +
    "<span ng-if=\"troubled\">\n" +
    "<pod-warnings pod=\"pod\" style=\"margin-right: -15px\"></pod-warnings>\n" +
    "</span>\n" +
    "<div ng-switch-when=\"Pending\">\n" +
    "<span ng-if=\"!pod.spec.nodeName\">scheduling...</span>\n" +
    "<span ng-if=\"pod.spec.nodeName && !pod.status.startTime\">scheduled</span>\n" +
    "<span ng-if=\"pod.spec.nodeName && pod.status.startTime\">pulling...</span>\n" +
    "</div>\n" +
    "<div ng-switch-default>\n" +
    "&nbsp;\n" +
    "<span ng-if=\"pod.status.podIP\">{{pod.status.podIP}}</span>\n" +
    "<relative-timestamp ng-if=\"!pod.status.podIP\" timestamp=\"pod.status.startTime\"></relative-timestamp>\n" +
    "&nbsp;\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/_probe.html',
    " <span ng-if=\"probe.httpGet\">\n" +
    "GET {{probe.httpGet.path || '/'}} on port {{probe.httpGet.port || 'unknown'}}\n" +
    "</span>\n" +
    "<span ng-if=\"probe.exec.command\">\n" +
    "<code class=\"probe-command\">\n" +
    "<span ng-repeat=\"arg in probe.exec.command\">\n" +
    "<truncate-long-text content=\"arg\" limit=\"80\" newline-limit=\"1\" expandable=\"false\" use-word-boundary=\"false\">\n" +
    "</truncate-long-text>\n" +
    "</span>\n" +
    "</code>\n" +
    "</span>\n" +
    "<span ng-if=\"probe.tcpSocket\">\n" +
    "Open socket on port {{probe.tcpSocket.port}}\n" +
    "</span>\n" +
    "<small class=\"text-muted\">\n" +
    "<span ng-if=\"probe.initialDelaySeconds\" class=\"nowrap\">{{probe.initialDelaySeconds}}s delay,</span>\n" +
    "<span class=\"nowrap\">{{probe.timeoutSeconds || 1}}s timeout</span>\n" +
    "</small>"
  );


  $templateCache.put('views/directives/_project-filter.html',
    "<div class=\"filter navbar-collapse-3 navbar-filter-widget-collapse\">\n" +
    "<div class=\"form-group\">\n" +
    "<label ng-if=\"!renderOptions || !renderOptions.hideFilterWidget\" class=\"control-label sr-only\">Filter by labels</label>\n" +
    "<div class=\"navbar-filter-widget\"></div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"active-filters\"></div>"
  );


  $templateCache.put('views/directives/_status-icon.html',
    "<span ng-switch=\"status\" class=\"hide-ng-leave status-icon\">\n" +
    "<span ng-switch-when=\"Cancelled\" class=\"fa fa-ban text-muted\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"Complete\" class=\"fa fa-check text-success\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"Completed\" class=\"fa fa-check text-success\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"Active\" class=\"fa fa-refresh\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"Error\" class=\"fa fa-times text-danger\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"Failed\" class=\"fa fa-times text-danger\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"New\" class=\"spinner spinner-xs spinner-inline\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"Pending\" class=\"spinner spinner-xs spinner-inline\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"Running\" class=\"fa fa-refresh\" aria-hidden=\"true\" ng-class=\"{'fa-spin' : spinning, 'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"Succeeded\" class=\"fa fa-check text-success\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"Bound\" class=\"fa fa-check text-success\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"Terminating\" class=\"fa fa-times text-danger\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"Terminated\" class=\"fa fa-times text-danger\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"Unknown\" class=\"fa fa-question text-danger\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "\n" +
    "<span ng-switch-when=\"ContainerCreating\" class=\"spinner spinner-xs spinner-inline\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"CrashLoopBackOff\" class=\"fa fa-times text-danger\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"ImagePullBackOff\" class=\"fa fa-times text-danger\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"ImageInspectError\" class=\"fa fa-times text-danger\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"ErrImagePull\" class=\"fa fa-times text-danger\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"ErrImageNeverPull\" class=\"fa fa-times text-danger\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"no matching container\" class=\"fa fa-times text-danger\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"RegistryUnavailable\" class=\"fa fa-times text-danger\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"RunContainerError\" class=\"fa fa-times text-danger\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"KillContainerError\" class=\"fa fa-times text-danger\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"VerifyNonRootError\" class=\"fa fa-times text-danger\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"SetupNetworkError\" class=\"fa fa-times text-danger\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"TeardownNetworkError\" class=\"fa fa-times text-danger\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "<span ng-switch-when=\"DeadlineExceeded\" class=\"fa fa-times text-danger\" aria-hidden=\"true\" ng-class=\"{'fa-fw': fixedWidth}\"></span>\n" +
    "</span>"
  );


  $templateCache.put('views/directives/_warnings-popover.html',
    "<span ng-if=\"content\">\n" +
    "<span dynamic-content=\"{{content}}\" data-toggle=\"popover\" data-trigger=\"hover\" data-html=\"true\" class=\"pficon pficon-warning-triangle-o warnings-popover\" aria-hidden=\"true\">\n" +
    "</span>\n" +
    "<span class=\"sr-only\">{{content}}</span>\n" +
    "</span>"
  );


  $templateCache.put('views/directives/annotations.html',
    "<div ng-if=\"annotations\" class=\"gutter-top-bottom\">\n" +
    "<a href=\"\" ng-click=\"toggleAnnotations()\" ng-if=\"annotations && !expandAnnotations\">Show annotations</a>\n" +
    "<a href=\"\" ng-click=\"toggleAnnotations()\" ng-if=\"annotations && expandAnnotations\">Hide annotations</a>\n" +
    "<div ng-if=\"expandAnnotations\" class=\"table-responsive\" style=\"margin-top: 5px\">\n" +
    "<table class=\"table table-bordered table-bordered-columns\">\n" +
    "<tbody>\n" +
    "<tr ng-repeat=\"(annotationKey, annotationValue) in annotations\">\n" +
    "<td style=\"padding-right: 10px; vertical-align: top\">{{annotationKey}}</td>\n" +
    "<td style=\"width: 100%\">\n" +
    "<span style=\"white-space: pre\">{{annotationValue | prettifyJSON}}</span>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/breadcrumbs.html',
    "<ol class=\"breadcrumb\" ng-if=\"breadcrumbs.length\">\n" +
    "<li ng-repeat=\"breadcrumb in breadcrumbs\" ng-class=\"{'active': !$last}\">\n" +
    "<a ng-if=\"!$last && breadcrumb.link\" href=\"{{breadcrumb.link}}\">{{breadcrumb.title}}</a>\n" +
    "<a ng-if=\"!$last && !breadcrumb.link\" href=\"\" back>{{breadcrumb.title}}</a>\n" +
    "<strong ng-if=\"$last\">{{breadcrumb.title}}</strong>\n" +
    "</li>\n" +
    "</ol>"
  );


  $templateCache.put('views/directives/build-pipeline.html',
    "<div>\n" +
    "<div ng-if=\"collapseStagesOnCompletion\">\n" +
    "<div ng-if=\"build | isIncompleteBuild\" ng-include=\"'views/directives/_build-pipeline-expanded.html'\"></div>\n" +
    "<div ng-if=\"!(build | isIncompleteBuild)\" ng-include=\"'views/directives/_build-pipeline-collapsed.html'\"></div>\n" +
    "</div>\n" +
    "<div ng-if=\"!collapseStagesOnCompletion\" ng-include=\"'views/directives/_build-pipeline-expanded.html'\"></div>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/build-status.html',
    "<status-icon status=\"build.status.phase\" disable-animation fixed-width=\"true\"></status-icon>\n" +
    "{{build.status.phase | sentenceCase}}\n" +
    "<span ng-switch=\"build.status.phase\" class=\"hide-ng-leave\">\n" +
    "<span ng-switch-when=\"Complete\"> in {{(build.status.startTimestamp || build.metadata.creationTimestamp) | timeOnlyDurationFromTimestamps : build.status.completionTimestamp}}</span>\n" +
    "<span ng-switch-when=\"Failed\">after <span ng-if=\"!build.status.startTimestamp\">waiting </span>{{(build.status.startTimestamp || build.metadata.creationTimestamp) | timeOnlyDurationFromTimestamps : build.status.completionTimestamp}}</span>\n" +
    "<span ng-switch-when=\"Cancelled\"> after {{(build.status.startTimestamp || build.metadata.creationTimestamp) | timeOnlyDurationFromTimestamps : build.status.completionTimestamp}}</span>\n" +
    "<span ng-switch-when=\"Running\"> for <time-only-duration-until-now timestamp=\"build.status.startTimestamp\" time-only></time-only-duration-until-now></span>\n" +
    "<span ng-switch-when=\"New\">, waiting for <time-only-duration-until-now timestamp=\"build.metadata.creationTimestamp\"></time-only-duration-until-now></span>\n" +
    "<span ng-switch-when=\"Pending\"> for <time-only-duration-until-now timestamp=\"build.metadata.creationTimestamp\"></time-only-duration-until-now></span>\n" +
    "<span ng-switch-default>\n" +
    "<span ng-if=\"build.status.startTimestamp\">, finished in {{build.status.startTimestamp | timeOnlyDurationFromTimestamps : build.status.completionTimestamp}}</span>\n" +
    "<span ng-if=\"!build.status.startTimestamp\">, waited for {{build.metadata.creationTimestamp | timeOnlyDurationFromTimestamps : build.status.completionTimestamp}}</span>\n" +
    "</span>\n" +
    "</span>"
  );


  $templateCache.put('views/directives/delete-button.html',
    "<div class=\"actions\">\n" +
    "\n" +
    "<a href=\"\" ng-click=\"$event.stopPropagation(); openDeleteModal()\" role=\"button\" class=\"action-button\" ng-attr-aria-disabled=\"{{disableDelete ? 'true' : undefined}}\" ng-class=\"{ 'disabled-link': disableDelete }\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i><span class=\"sr-only\">Delete {{kind | humanizeKind}} {{resourceName}}</span></a>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/delete-link.html',
    "<a href=\"javascript:void(0)\" ng-click=\"openDeleteModal()\" role=\"button\" ng-attr-aria-disabled=\"{{disableDelete ? 'true' : undefined}}\" ng-class=\"{ 'disabled-link': disableDelete }\">{{label || 'Delete'}}</a>"
  );


  $templateCache.put('views/directives/deploy-image.html',
    "<div class=\"deploy-image\">\n" +
    "<p>\n" +
    "Deploy an existing image from an image stream tag or Docker pull spec.\n" +
    "</p>\n" +
    "<form>\n" +
    "<fieldset ng-disabled=\"loading\">\n" +
    "<div class=\"radio\">\n" +
    "<label>\n" +
    "<input type=\"radio\" ng-model=\"mode\" value=\"istag\">\n" +
    "Image Stream Tag\n" +
    "</label>\n" +
    "</div>\n" +
    "<fieldset ng-disabled=\"mode !== 'istag'\">\n" +
    "<istag-select model=\"istag\" include-shared-namespace=\"true\"></istag-select>\n" +
    "<div ng-if=\"mode == 'istag' && istag.namespace && istag.namespace !== 'openshift' && istag.namespace !== project\" class=\"alert alert-warning\">\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" aria-hidden=\"true\"></span>\n" +
    "Service account <strong>default</strong> will need image pull authority to deploy images from <strong>{{istag.namespace}}</strong>. You can grant authority with the command:\n" +
    "<p>\n" +
    "<code>oc policy add-role-to-user system:image-puller system:serviceaccount:{{project}}:default -n {{istag.namespace}}</code>\n" +
    "</p>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "<div class=\"radio\">\n" +
    "<label>\n" +
    "<input type=\"radio\" ng-model=\"mode\" value=\"dockerImage\">\n" +
    "Image Name\n" +
    "</label>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"imageName\" class=\"sr-only\">Image name or pull spec</label>\n" +
    "<div class=\"input-group\">\n" +
    "<input type=\"search\" id=\"imageName\" ng-model=\"imageName\" required select-on-focus ng-disabled=\"mode !== 'dockerImage'\" placeholder=\"Image name or pull spec\" class=\"form-control\">\n" +
    "<span class=\"input-group-btn\">\n" +
    "<button class=\"btn btn-default\" type=\"submit\" ng-disabled=\"!imageName\" ng-click=\"findImage()\">\n" +
    "<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n" +
    "<span class=\"sr-only\">Find</span>\n" +
    "</button>\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "</form>\n" +
    "<div ng-if=\"loading || !import\" class=\"empty-state-message text-muted text-center\">\n" +
    "<span class=\"fa fa-cube icon-lg hero-icon\" aria-hidden=\"true\"></span>\n" +
    "<div ng-if=\"!loading\" class=\"h2\">Select an image stream tag or enter an image name.</div>\n" +
    "<div ng-if=\"loading\" class=\"h2 truncate\">Loading image metadata for {{imageName | stripSHA}}...</div>\n" +
    "</div>\n" +
    "<div class=\"row mar-bottom-md\" ng-if-start=\"!loading && import.image\">\n" +
    "<div class=\"col-sm-12 mar-top-lg mar-bottom-lg\">\n" +
    "<div class=\"separator\"></div>\n" +
    "</div>\n" +
    "<div class=\"col-sm-2 hidden-xs text-right h2\">\n" +
    "<span class=\"fa fa-cube text-muted\" style=\"font-size: 100px\" aria-hidden=\"true\"></span>\n" +
    "</div>\n" +
    "<div class=\"col-sm-10\">\n" +
    "<div ng-if=\"runsAsRoot\" class=\"alert alert-warning\">\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" aria-hidden=\"true\"></span>\n" +
    "Image <strong>{{import.name}}</strong> runs as the\n" +
    "<strong>root</strong> user which might not be permitted by your cluster administrator.\n" +
    "</div>\n" +
    "<h2>\n" +
    "{{app.name}}<span ng-if=\"import.tag\">:{{import.tag}}</span>\n" +
    "<small>\n" +
    "<span ng-if=\"mode === 'dockerImage'\">from {{import.result.ref.registry || \"Docker Hub\"}},</span>\n" +
    "<relative-timestamp timestamp=\"import.image.dockerImageMetadata.Created\"></relative-timestamp>,\n" +
    "<span ng-if=\"import.image.dockerImageMetadata.Size\">{{import.image.dockerImageMetadata.Size | humanizeSize}},</span>\n" +
    "{{import.image.dockerImageLayers.length}} layers\n" +
    "</small>\n" +
    "</h2>\n" +
    "<ul>\n" +
    "<li ng-if=\"!import.namespace\">Image Stream <strong>{{app.name || \"&lt;name&gt;\"}}:{{import.tag || 'latest'}}</strong> will track this image.</li>\n" +
    "<li>This image will be deployed in Deployment Config <strong>{{app.name || \"&lt;name&gt;\"}}</strong>.</li>\n" +
    "<li ng-if=\"ports.length\">\n" +
    "<span ng-if=\"ports.length === 1\">Port</span>\n" +
    "<span ng-if=\"ports.length > 1\">Ports</span>\n" +
    "<span ng-repeat=\"port in ports\">\n" +
    "<span ng-if=\"!$first && $last\">and</span>\n" +
    "{{port.containerPort}}/{{port.protocol}}<span ng-if=\"!$last && ports.length > 2\">,</span>\n" +
    "</span>\n" +
    "will be load balanced by Service <strong>{{app.name || \"&lt;name&gt;\"}}</strong>.\n" +
    "<div>Other containers can access this service through the hostname <strong>{{app.name || \"&lt;name&gt;\"}}</strong>.</div>\n" +
    "</li>\n" +
    "</ul>\n" +
    "<div ng-if=\"(volumes | hashSize) > 0\" class=\"help-block\">\n" +
    "This image declares volumes and will default to use non-persistent, host-local storage. You can add persistent storage later to the deployment config.\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"row\" ng-if-end>\n" +
    "<div class=\"col-sm-12\">\n" +
    "<form name=\"form\" class=\"osc-form\">\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"name\" class=\"required\">Name</label>\n" +
    "<div ng-class=\"{'has-error': form.name.$invalid}\">\n" +
    "<input type=\"text\" required select-on-focus minlength=\"2\" maxlength=\"24\" pattern=\"[a-z]([-a-z0-9]*[a-z0-9])?\" ng-model=\"app.name\" id=\"name\" name=\"name\" class=\"form-control\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck>\n" +
    "</div>\n" +
    "<div class=\"help-block\">Identifies the resources created for this image.</div>\n" +
    "<div class=\"has-error\" ng-show=\"form.name.$invalid\">\n" +
    "<div class=\"help-block\" ng-show=\"form.name.$error.required\">\n" +
    "A name is required.\n" +
    "</div>\n" +
    "<div class=\"help-block\" ng-show=\"form.name.$error.pattern\">\n" +
    "Name must be an alphanumeric (a-z, 0-9) string with a maximum length of 24 characters where the first character is a letter (a-z). The '-' character is allowed anywhere except the first or last character.\n" +
    "</div>\n" +
    "<div class=\"help-block\" ng-show=\"form.name.$error.minlength\">\n" +
    "Name must have at least 2 characters.\n" +
    "</div>\n" +
    "<div class=\"help-block\" ng-show=\"form.name.$error.maxlength\">\n" +
    "Name can't have more than 24 characters.\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<osc-form-section header=\"Environment Variables\" about-title=\"Environment Variables\" about=\"Environment variables are used to configure and pass information to running containers.\" expand=\"true\" can-toggle=\"false\" class=\"first-section\">\n" +
    "<key-value-editor entries=\"env\" key-placeholder=\"Name\" key-validator=\"[A-Za-z_][A-Za-z0-9_]*\" key-validator-error=\"A valid environment variable name is an alphanumeric (a-z and 0-9) string beginning with a letter that may contain underscores.\" value-placeholder=\"Value\" add-row-link=\"Add environment variable\"></key-value-editor>\n" +
    "</osc-form-section>\n" +
    "<label-editor labels=\"labels\" system-labels=\"systemLabels\" expand=\"true\" can-toggle=\"false\" help-text=\"Each label is applied to each created resource.\">\n" +
    "</label-editor>\n" +
    "<div class=\"button-group gutter-top gutter-bottom\">\n" +
    "<button type=\"submit\" class=\"btn btn-primary btn-lg\" ng-click=\"create()\" value=\"\" ng-disabled=\"form.$invalid\">Create</button>\n" +
    "<a class=\"btn btn-default btn-lg\" href=\"#\" back>Cancel</a>\n" +
    "</div>\n" +
    "</form>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"!loading && import.error\" class=\"empty-state-message text-center\">\n" +
    "<h2>\n" +
    "<i class=\"pficon pficon-error-circle-o\" aria-hidden=\"true\"></i>\n" +
    "Could not load image metadata.\n" +
    "</h2>\n" +
    "<p>{{import.error | upperFirst}}</p>\n" +
    "</div>\n" +
    "<div ng-if=\"!loading && import && !import.error && !import.image\" class=\"empty-state-message text-center\">\n" +
    "<h2>\n" +
    "No image metadata found.\n" +
    "</h2>\n" +
    "<p>Could not find any images for {{import.name | stripTag}}:{{import.tag}}.</p>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/deployment-donut.html',
    "<div column class=\"deployment-donut\">\n" +
    "<div row>\n" +
    "<div column>\n" +
    "<pod-donut pods=\"pods\" desired=\"getDesiredReplicas()\" idled=\"isIdled\" ng-click=\"viewPodsForDeployment(rc)\" ng-class=\"{ clickable: (pods | hashSize) > 0 }\">\n" +
    "</pod-donut>\n" +
    "\n" +
    "<a href=\"\" class=\"sr-only\" ng-click=\"viewPodsForDeployment(rc)\" ng-if=\"(pods | hashSize) > 0\" role=\"button\">\n" +
    "View pods for {{rc | displayName}}\n" +
    "</a>\n" +
    "</div>\n" +
    "\n" +
    "<div column class=\"scaling-controls fade-inline\" ng-if=\"(hpa && !hpa.length) && ((deploymentConfig || rc) | canIScale) && !isIdled\">\n" +
    "<div>\n" +
    "<a href=\"\" ng-click=\"scaleUp()\" ng-class=\"{ disabled: !scalable }\" ng-attr-title=\"{{!scalable ? undefined : 'Scale up'}}\" ng-attr-aria-disabled=\"{{!scalable ? 'true' : undefined}}\">\n" +
    "<i class=\"fa fa-chevron-up\"></i>\n" +
    "<span class=\"sr-only\">Scale up</span>\n" +
    "</a>\n" +
    "</div>\n" +
    "<div>\n" +
    "\n" +
    "<a href=\"\" ng-click=\"scaleDown()\" ng-class=\"{ disabled: !scalable || getDesiredReplicas() === 0 }\" ng-attr-title=\"{{(!scalable || getDesiredReplicas() === 0) ? undefined : 'Scale down'}}\" ng-attr-aria-disabled=\"{{(!scalable || getDesiredReplicas() === 0) ? 'true' : undefined}}\" role=\"button\">\n" +
    "<i class=\"fa fa-chevron-down\"></i>\n" +
    "<span class=\"sr-only\">Scale down</span>\n" +
    "</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div row ng-if=\"hpa.length\" class=\"scaling-details\">\n" +
    "<div>\n" +
    "Autoscaled:\n" +
    "<span class=\"nowrap\">min: {{hpa[0].spec.minReplicas || 1}},</span>\n" +
    "<span class=\"nowrap\">\n" +
    "max: {{hpa[0].spec.maxReplicas}}\n" +
    "<span ng-if=\"hpaWarnings\" dynamic-content=\"{{hpaWarnings}}\" data-toggle=\"popover\" data-trigger=\"hover\" data-html=\"true\" class=\"pficon pficon-warning-triangle-o hpa-warning\" aria-hidden=\"true\">\n" +
    "</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"scaling-details\" ng-if=\"isIdled && (!getDesiredReplicas())\">\n" +
    "<div ng-if=\"(!resuming)\">\n" +
    "<span>Idled due to inactivity.</span>\n" +
    "<a href=\"\" ng-click=\"unIdle()\">Start {{(deploymentConfig || rc) | unidleTargetReplicas : hpa}} pod{{ ((deploymentConfig || rc) | unidleTargetReplicas : hpa) > 1 ? 's' : ''}}</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/deployment-metrics.html',
    "<div class=\"metrics\">\n" +
    "<div ng-if=\"!metricsError\" class=\"metrics-options\">\n" +
    "<div ng-if=\"containers.length\" class=\"form-group\">\n" +
    "<label for=\"selectContainer\">Container:</label>\n" +
    "<div class=\"select-container\">\n" +
    "<span ng-show=\"containers.length === 1\">\n" +
    "{{options.selectedContainer.name}}\n" +
    "</span>\n" +
    "<select id=\"selectContainer\" ng-show=\"containers.length > 1\" ng-model=\"options.selectedContainer\" ng-options=\"container.name for container in containers track by container.name\">\n" +
    "</select>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"timeRange\">Time Range:</label>\n" +
    "<select id=\"timeRange\" ng-model=\"options.timeRange\" ng-options=\"range.label for range in options.rangeOptions\" ng-disabled=\"metricsError\">\n" +
    "</select>\n" +
    "</div>\n" +
    "</div>\n" +
    "<ellipsis-pulser color=\"dark\" size=\"sm\" msg=\"Loading metrics\" ng-if=\"!loaded\"></ellipsis-pulser>\n" +
    "<div ng-if=\"loaded && noData && !metricsError\" class=\"mar-top-md\">\n" +
    "No metrics to display.\n" +
    "</div>\n" +
    "<div ng-if=\"metricsError\" class=\"empty-state-message text-center\">\n" +
    "<h2>\n" +
    "<span class=\"pficon pficon-error-circle-o\" aria-hidden=\"true\"></span>\n" +
    "Metrics are not available.\n" +
    "</h2>\n" +
    "<p>\n" +
    "An error occurred getting metrics<span ng-if=\"options.selectedContainer.name\">\n" +
    "for container {{options.selectedContainer.name}}</span><span ng-if=\"metricsURL\">\n" +
    "from <a ng-href=\"{{metricsURL}}\">{{metricsURL}}</a></span>.\n" +
    "</p>\n" +
    "<p class=\"text-muted\">\n" +
    "{{metricsError.details}}\n" +
    "</p>\n" +
    "</div>\n" +
    "<div ng-repeat=\"metric in metrics\" ng-show=\"!noData && !metricsError\" class=\"metrics-full\">\n" +
    "<h3 class=\"metric-label\">\n" +
    "{{metric.label}}\n" +
    "<small ng-if=\"showAverage\">\n" +
    "Average per pod\n" +
    "</small>\n" +
    "</h3>\n" +
    "\n" +
    "<div ng-attr-id=\"{{metric.chartID}}\" class=\"metrics-sparkline\"></div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/edit-webhook-triggers.html',
    "<h5>{{type}} webhooks\n" +
    "<span class=\"help action-inline\">\n" +
    "<a href=\"\" aria-hidden=\"true\">\n" +
    "<span class=\"sr-only\">{{typeInfo}}</span>\n" +
    "<i class=\"pficon pficon-help\" data-toggle=\"tooltip\" aria-hidden=\"true\" data-original-title=\"{{typeInfo}}\"></i>\n" +
    "</a>\n" +
    "</span>\n" +
    "</h5>\n" +
    "<div ng-repeat=\"trigger in triggers\">\n" +
    "<div class=\"trigger-info\">\n" +
    "<span class=\"trigger-url\">\n" +
    "<copy-to-clipboard is-disabled=\"trigger.disabled\" clipboard-text=\"bcName | webhookURL : trigger.data.type : trigger.data[(type === 'GitHub') ? 'github' : 'generic'].secret : projectName\"></copy-to-clipboard>\n" +
    "</span>\n" +
    "<span class=\"visible-xs-inline trigger-actions\">\n" +
    "<a href=\"\" ng-if=\"!trigger.disabled\" class=\"action-icon\" ng-click=\"trigger.disabled = true; form.$setDirty()\" role=\"button\">\n" +
    "<span class=\"pficon pficon-close\" aria-hidden=\"true\" title=\"Remove\"></span>\n" +
    "<span class=\"sr-only\">Remove</span>\n" +
    "</a>\n" +
    "<a href=\"\" ng-if=\"trigger.disabled\" class=\"action-icon\" ng-click=\"trigger.disabled = false\" role=\"button\">\n" +
    "<span class=\"fa fa-repeat\" aria-hidden=\"true\" title=\"Undo\"></span>\n" +
    "<span class=\"sr-only\">Undo</span>\n" +
    "</a>\n" +
    "</span>\n" +
    "<span class=\"hidden-xs trigger-actions\">\n" +
    "<a href=\"\" role=\"button\" ng-if=\"!trigger.disabled\" ng-click=\"trigger.disabled = true; form.$setDirty()\">Remove</a>\n" +
    "<a href=\"\" role=\"button\" ng-if=\"trigger.disabled\" ng-click=\"trigger.disabled = false\">Undo</a>\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<span class=\"learn-more-inline checkbox\">\n" +
    "<a href=\"\" role=\"button\" ng-click=\"addWebhookTrigger(type)\">Add {{type}} webhook</a>\n" +
    "</span>"
  );


  $templateCache.put('views/directives/environment.html',
    "<div ng-if=\"envVars.length\" class=\"table-responsive\" style=\"margin-top: 5px\">\n" +
    "<table class=\"table table-bordered environment-variables\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Name</th>\n" +
    "<th>Value</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody>\n" +
    "<tr ng-repeat=\"env in envVars\">\n" +
    "<td>{{env.name}}</td>\n" +
    "<td ng-if=\"!env.valueFrom\">\n" +
    "<truncate-long-text class=\"env-var-value\" content=\"env.value\" limit=\"200\" newline-limit=\"3\" expandable=\"true\" prettify-json=\"true\"></truncate-long-text>\n" +
    "</td>\n" +
    "<td ng-if=\"env.valueFrom\">\n" +
    "<span class=\"fa fa-external-link-square\" style=\"cursor: help\" data-toggle=\"popover\" data-trigger=\"hover\" data-content=\"This is a referenced value that will be generated when a container is created.  On running pods you can check the resolved values by going to the Terminal tab and echoing the environment variable.\"></span>\n" +
    "<span ng-repeat=\"(key, value) in env.valueFrom\">\n" +
    "<span ng-switch on=\"key\">\n" +
    "<span ng-switch-when=\"configMapKeyRef\">\n" +
    "Set to the key <b>{{value.key}}</b> in config map <b>{{value.name}}</b>.\n" +
    "</span>\n" +
    "<span ng-switch-when=\"secretKeyRef\">\n" +
    "Set to the key <b>{{value.key}}</b> in secret <b>{{value.name}}</b>.\n" +
    "</span>\n" +
    "<span ng-switch-when=\"fieldRef\">\n" +
    "Set to the field <b>{{value.fieldPath}}</b> in the current object.\n" +
    "</span>\n" +
    "<span ng-switch-default>\n" +
    "Set to a reference on a <b>{{key}}</b>.\n" +
    "</span>\n" +
    "</span>\n" +
    "</span>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/events-badge.html',
    "<a ng-href=\"project/{{projectContext.projectName}}/browse/events\" class=\"events-badge visible-xs\"><span class=\"event-label\">Events</span><span ng-if=\"warningCount\" class=\"mar-left-md\"><span class=\"pficon pficon-warning-triangle-o mar-right-sm\" aria-hidden=\"true\"></span><span class=\"sr-only\">Warning</span><span class=\"event-count\">{{warningCount}}</span></span><span ng-if=\"normalCount\" class=\"mar-left-sm\"><span class=\"pficon pficon-info mar-right-sm\" aria-hidden=\"true\"></span><span class=\"sr-only\">Normal</span><span class=\"event-count\">{{normalCount}}</span></span></a>\n" +
    "<a href=\"\" ng-click=\"expandSidebar()\" ng-if=\"sidebarCollapsed\" class=\"events-badge hidden-xs\"><span class=\"events-sidebar-expand fa fa-arrow-circle-o-left mar-right-md\"><span class=\"sr-only\">Expand event sidebar</span></span><span class=\"event-label\">Events</span><span ng-if=\"warningCount\" class=\"mar-left-md\"><span class=\"pficon pficon-warning-triangle-o mar-right-sm\" aria-hidden=\"true\"></span><span class=\"sr-only\">Warning</span><span class=\"event-count\">{{warningCount}}</span></span><span ng-if=\"normalCount\" class=\"mar-left-sm\"><span class=\"pficon pficon-info mar-right-sm\" aria-hidden=\"true\"></span><span class=\"sr-only\">Normal</span><span class=\"event-count\">{{normalCount}}</span></span></a>"
  );


  $templateCache.put('views/directives/events-sidebar.html',
    "<div class=\"right-container events-sidebar\" ng-hide=\"sidebarCollapsed\">\n" +
    "<div class=\"sidebar-header right-header\">\n" +
    "<div>\n" +
    "<h2>\n" +
    "<span class=\"events-sidebar-collapse\"><a href=\"\" class=\"fa fa-arrow-circle-o-right\" title=\"Collapse event sidebar\" ng-click=\"collapseSidebar()\"><span class=\"sr-only\">Collapse event sidebar</span></a></span>\n" +
    "Events\n" +
    "<small ng-if=\"warningCount\" class=\"warning-count\">\n" +
    "<span class=\"pficon pficon-warning-triangle-o\"></span>\n" +
    "{{warningCount}}\n" +
    "<span class=\"hidden-xs hidden-sm\">\n" +
    "<span ng-if=\"warningCount === 1\">warning</span>\n" +
    "<span ng-if=\"warningCount > 1\">warnings</span>\n" +
    "</span>\n" +
    "</small>\n" +
    "</h2>\n" +
    "</div>\n" +
    "<div ng-if=\"events | hashSize\" class=\"event-details-link\">\n" +
    "<a ng-href=\"project/{{projectContext.projectName}}/browse/events\">View Details</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"right-content\">\n" +
    "<ellipsis-pulser color=\"dark\" size=\"sm\" msg=\"Loading\" ng-if=\"!events\" class=\"events\"></ellipsis-pulser>\n" +
    "<div ng-if=\"events\" class=\"events\">\n" +
    "<div ng-if=\"!(events | hashSize)\" class=\"mar-left-xl\">\n" +
    "<em>No events.</em>\n" +
    "</div>\n" +
    "<div ng-repeat=\"event in events track by (event | uid)\" class=\"event animate-repeat\" ng-class=\"{'highlight': highlightedEvents[event.involvedObject.kind + '/' + event.involvedObject.name]}\">\n" +
    "<span class=\"sr-only\">{{event.type}}</span>\n" +
    "<div class=\"event-icon\" aria-hidden=\"true\">\n" +
    "<div ng-switch=\"event.type\" class=\"hide-ng-leave\">\n" +
    "<span ng-switch-when=\"Warning\" class=\"pficon pficon-warning-triangle-o\"></span>\n" +
    "<span ng-switch-when=\"Normal\" class=\"pficon pficon-info text-muted\"></span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"event-details\">\n" +
    "<div class=\"detail-group\">\n" +
    "<div class=\"event-reason\">\n" +
    "{{event.reason | sentenceCase}}\n" +
    "</div>\n" +
    "<div class=\"event-object\">\n" +
    "{{event.involvedObject.kind | kindToResource | abbreviateResource}}/{{event.involvedObject.name}}\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"detail-group\">\n" +
    "<div class=\"event-message\">\n" +
    "{{event.message}}\n" +
    "</div>\n" +
    "<div class=\"event-timestamp\">\n" +
    "<relative-timestamp timestamp=\"event.lastTimestamp\"></relative-timestamp>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"event.count > 1\" class=\"text-muted small\">\n" +
    "{{event.count}} times in the last\n" +
    "<duration-until-now timestamp=\"event.firstTimestamp\" omit-single=\"true\" precision=\"1\"></duration-until-now>\n" +
    "</div>\n" +
    "<div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/events.html',
    "<div ng-if=\"!events\">\n" +
    "Loading...\n" +
    "</div>\n" +
    "<div ng-if=\"events\">\n" +
    "<div class=\"table-toolbar form-inline\">\n" +
    "<div class=\"form-group filter-controls\">\n" +
    "<label for=\"events-filter\" class=\"sr-only\">Filter</label>\n" +
    "<input type=\"search\" placeholder=\"Filter by keyword\" class=\"form-control\" id=\"events-filter\" ng-model=\"filter.text\">\n" +
    "</div>\n" +
    "<div class=\"vertical-divider\"></div>\n" +
    "<div class=\"sort-group\">\n" +
    "<span class=\"sort-label\">Sort by</span>\n" +
    "<div pf-sort config=\"sortConfig\" class=\"sort-controls\"></div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<table class=\"table table-bordered table-condensed table-mobile table-hover events-table\" ng-class=\"{ 'table-empty': (filteredEvents | hashSize) === 0 }\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th id=\"time\">Time</th>\n" +
    "\n" +
    "<th id=\"kind-name\" ng-if=\"!resourceKind || !resourceName\">\n" +
    "<span class=\"hidden-xs-inline visible-sm-inline visible-md-inline hidden-lg-inline\">Kind and Name</span>\n" +
    "<span class=\"visible-lg-inline\">Name</span>\n" +
    "</th>\n" +
    "<th id=\"kind\" ng-if=\"!resourceKind || !resourceName\" class=\"hidden-sm hidden-md\">\n" +
    "<span class=\"visible-lg-inline\">Kind</span>\n" +
    "</th>\n" +
    "<th id=\"severity\" class=\"hidden-xs hidden-sm hidden-md\"><span class=\"sr-only\">Severity</span></th>\n" +
    "<th id=\"reason\" class=\"hidden-sm hidden-md\"><span class=\"visible-lg-inline\">Reason</span></th>\n" +
    "<th id=\"message\"><span class=\"hidden-xs-inline visible-sm-inline visible-md-inline hidden-lg-inline\">Reason and </span>Message</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody ng-if=\"(filteredEvents | hashSize) === 0\">\n" +
    "<tr>\n" +
    "<td class=\"hidden-lg\" colspan=\"3\">\n" +
    "<span ng-if=\"(events | hashSize) === 0\"><em>No events to show.</em></span>\n" +
    "<span ng-if=\"(events | hashSize) > 0\">\n" +
    "All events hidden by filter.\n" +
    "<a href=\"\" ng-click=\"filter.text = ''\" role=\"button\">Clear filter</a>\n" +
    "</span>\n" +
    "</td>\n" +
    "<td class=\"hidden-xs hidden-sm hidden-md\" colspan=\"6\">\n" +
    "<span ng-if=\"(events | hashSize) === 0\"><em>No events to show.</em></span>\n" +
    "<span ng-if=\"(events | hashSize) > 0\">\n" +
    "All events hidden by filter.\n" +
    "<a href=\"\" ng-click=\"filter.text = ''\" role=\"button\">Clear filter</a>\n" +
    "</span>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "<tbody ng-repeat=\"event in filteredEvents\">\n" +
    "<tr>\n" +
    "<td data-title=\"Time\" class=\"nowrap\">{{event.lastTimestamp | date:'mediumTime'}}</td>\n" +
    "<td ng-if=\"!resourceKind || !resourceName\" data-title=\"Name\">\n" +
    "<div class=\"hidden-xs-block visible-sm-block visible-md-block hidden-lg-block\">{{event.involvedObject.kind | humanizeKind : true}}</div>\n" +
    "{{event.involvedObject.name}}\n" +
    "</td>\n" +
    "<td ng-if=\"!resourceKind || !resourceName\" class=\"hidden-sm hidden-md\" data-title=\"Kind\">\n" +
    "{{event.involvedObject.kind | humanizeKind : true}}</td>\n" +
    "<td data-title=\"Severity\" class=\"hidden-xs hidden-sm hidden-md text-center severity-icon-td\">\n" +
    "<span class=\"sr-only\">{{event.type}}</span>\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" ng-show=\"event.type === 'Warning'\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-original-title=\"Warning\"></span></td>\n" +
    "<td class=\"hidden-sm hidden-md\" data-title=\"Reason\">\n" +
    "{{event.reason | sentenceCase}}&nbsp;<span class=\"visible-xs-inline pficon pficon-warning-triangle-o\" ng-show=\"event.type === 'Warning'\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-original-title=\"Warning\"></span>\n" +
    "</td>\n" +
    "<td data-title=\"Message\">\n" +
    "<div class=\"hidden-xs-block visible-sm-block visible-md-block hidden-lg-block\">\n" +
    "{{event.reason | sentenceCase}}&nbsp;\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" ng-show=\"event.type === 'Warning'\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-original-title=\"Warning\"></span>\n" +
    "</div>\n" +
    "{{event.message}}\n" +
    "<div ng-if=\"event.count > 1\" class=\"text-muted small\">\n" +
    "{{event.count}} times in the last\n" +
    "<duration-until-now timestamp=\"event.firstTimestamp\" omit-single=\"true\" precision=\"1\"></duration-until-now>\n" +
    "</div>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/from-file.html',
    "<p>\n" +
    "Create or replace resources from their YAML or JSON definitions. If adding a template, you'll have the option to process the template.\n" +
    "</p>\n" +
    "<parse-error error=\"error\" ng-show=\"error\"></parse-error>\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-sm-12 pod-bottom-xl\">\n" +
    "<form name=\"form\">\n" +
    "<div class=\"form-group\" id=\"from-file\">\n" +
    "<osc-file-input model=\"editorContent\" drop-zone-id=\"from-file\" dragging=\"false\" help-text=\"Upload file by dragging & dropping, selecting it, or pasting from the clipboard.\" ng-disabled=\"false\" show-values=\"false\"></osc-file-input>\n" +
    "<div ui-ace=\"{\n" +
    "          mode: 'yaml',\n" +
    "          theme: 'eclipse',\n" +
    "          onLoad: aceLoaded,\n" +
    "          onChange: aceChanged,\n" +
    "          rendererOptions: {\n" +
    "            fadeFoldWidgets: true,\n" +
    "            showPrintMargin: false\n" +
    "          }\n" +
    "        }\" ng-model=\"editorContent\" class=\"editor ace-bordered yaml-mode\" id=\"add-component-editor\" required></div>\n" +
    "</div>\n" +
    "<div class=\"buttons gutter-top-bottom\">\n" +
    "<button type=\"submit\" ng-click=\"create()\" ng-disabled=\"editorErrorAnnotation || !editorContent\" class=\"btn btn-primary btn-lg\">\n" +
    "Create\n" +
    "</button>\n" +
    "<a class=\"btn btn-default btn-lg\" href=\"{{projectName | projectOverviewURL}}\">\n" +
    "Cancel\n" +
    "</a>\n" +
    "</div>\n" +
    "</form>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/header/_navbar-utility-mobile.html',
    "<nav class=\"navbar navbar-sidebar visible-xs-block\">\n" +
    "<ul extension-point extension-name=\"nav-dropdown-mobile\" extension-types=\"dom\" extension-args=\"[user]\" class=\"nav nav-sidenav-primary\"></ul>\n" +
    "</nav>"
  );


  $templateCache.put('views/directives/header/_navbar-utility.html',
    "<ul class=\"nav navbar-nav navbar-right navbar-iconic\">\n" +
    "<li extension-point extension-name=\"nav-system-status\" extension-types=\"dom\"></li>\n" +
    "<li uib-dropdown>\n" +
    "<a uib-dropdown-toggle class=\"nav-item-iconic\" id=\"help-dropdown\" href=\"\">\n" +
    "<span title=\"Help\" class=\"fa pficon-help\" aria-hidden=\"true\"></span>\n" +
    "<span class=\"sr-only\">Help</span>\n" +
    "<span class=\"caret\" aria-hidden=\"true\"></span>\n" +
    "</a>\n" +
    "<ul class=\"uib-dropdown-menu\" aria-labelledby=\"help-dropdown\" extension-point extension-name=\"nav-help-dropdown\" extension-types=\"dom html\"></ul>\n" +
    "</li>\n" +
    "<li uib-dropdown ng-cloak ng-if=\"user\">\n" +
    "<a href=\"\" uib-dropdown-toggle id=\"user-dropdown\" class=\"nav-item-iconic\">\n" +
    "<span class=\"pf-icon pficon-user\" aria-hidden=\"true\"></span>\n" +
    "<span class=\"username truncate\">{{user.fullName || user.metadata.name}}</span> <span class=\"caret\" aria-hidden=\"true\"></span>\n" +
    "</a>\n" +
    "<ul class=\"uib-dropdown-menu\" aria-labelledby=\"user-dropdown\" extension-point extension-name=\"nav-user-dropdown\" extension-types=\"dom html\"></ul>\n" +
    "</li>\n" +
    "</ul>"
  );


  $templateCache.put('views/directives/header/default-header.html',
    "<nav class=\"navbar navbar-pf-alt\" role=\"navigation\">\n" +
    "<div row>\n" +
    "<div class=\"navbar-header\">\n" +
    "\n" +
    "<div row flex class=\"navbar-flex-btn toggle-menu\">\n" +
    "<button type=\"button\" class=\"navbar-toggle project-action-btn ng-isolate-scope\" data-toggle=\"collapse\" data-target=\".navbar-collapse-2\">\n" +
    "<span class=\"sr-only\">Toggle navigation</span>\n" +
    "<span class=\"icon-bar\"></span>\n" +
    "<span class=\"icon-bar\"></span>\n" +
    "<span class=\"icon-bar\"></span>\n" +
    "</button>\n" +
    "</div>\n" +
    "\n" +
    "<a class=\"navbar-brand\" id=\"openshift-logo\" href=\"./\">\n" +
    "<div id=\"header-logo\"></div>\n" +
    "</a>\n" +
    "</div>\n" +
    "\n" +
    "<navbar-utility class=\"collapse navbar-collapse\"></navbar-utility>\n" +
    "<div row extension-point extension-name=\"nav-system-status-mobile\" extension-types=\"dom\" class=\"navbar-flex-btn hide-if-empty\"></div>\n" +
    "</div>\n" +
    "</nav>"
  );


  $templateCache.put('views/directives/header/project-header.html',
    "<nav class=\"navbar navbar-pf-alt\" role=\"navigation\">\n" +
    "<div row flex class=\"navbar-header hidden-xs\">\n" +
    "<a class=\"navbar-home\" href=\"./\"><span class=\"fa-fw pficon pficon-home\" aria-hidden=\"true\"></span> <span class=\"visible-xlg-inline-block\"> Projects</span></a>\n" +
    "</div>\n" +
    "<div class=\"nav navbar-project-menu\">\n" +
    "<div row>\n" +
    "\n" +
    "<div row flex class=\"navbar-flex-btn toggle-menu\">\n" +
    "<button type=\"button\" class=\"navbar-toggle project-action-btn ng-isolate-scope\" data-toggle=\"collapse\" data-target=\".navbar-collapse-1\">\n" +
    "<span class=\"sr-only\">Toggle navigation</span>\n" +
    "<span class=\"icon-bar\"></span>\n" +
    "<span class=\"icon-bar\"></span>\n" +
    "<span class=\"icon-bar\"></span>\n" +
    "</button>\n" +
    "</div>\n" +
    "<div flex class=\"form-group\">\n" +
    "\n" +
    "\n" +
    "<select class=\"selectpicker form-control\" data-selected-text-format=\"count>3\" id=\"boostrapSelect\" title=\"\"></select>\n" +
    "</div>\n" +
    "\n" +
    "<div row flex class=\"navbar-flex-btn project-action\" ng-if=\"project.metadata.name | canIAddToProject\">\n" +
    "<a row class=\"project-action-btn\" href=\"project/{{project.metadata.name}}/create\" ng-disabled=\"project.status.phase != 'Active'\" title=\"Add to project\">\n" +
    "<i class=\"fa fa-plus visible-xs-inline-block\"></i><span class=\"hidden-xs\">Add to project</span>\n" +
    "</a>\n" +
    "</div>\n" +
    "<div row extension-point extension-name=\"nav-system-status-mobile\" extension-types=\"dom\" class=\"navbar-flex-btn hide-if-empty\"></div>\n" +
    "</div>\n" +
    "</div> \n" +
    "<navbar-utility class=\"hidden-xs\"></navbar-utility>\n" +
    "</nav>"
  );


  $templateCache.put('views/directives/hpa.html',
    "<dl class=\"dl-horizontal left\" style=\"margin-bottom: 10px\">\n" +
    "<dt ng-if-start=\"showScaleTarget && hpa.spec.scaleRef.kind && hpa.spec.scaleRef.name\">{{hpa.spec.scaleRef.kind | humanizeKind : true}}:</dt>\n" +
    "<dd ng-if-end>\n" +
    "<a ng-href=\"{{hpa.spec.scaleRef.name | navigateResourceURL : hpa.spec.scaleRef.kind : hpa.metadata.namespace}}\">{{hpa.spec.scaleRef.name}}</a>\n" +
    "</dd>\n" +
    "<dt>Min Pods:</dt>\n" +
    "<dd>{{hpa.spec.minReplicas || 1}}</dd>\n" +
    "<dt>Max Pods:</dt>\n" +
    "<dd>{{hpa.spec.maxReplicas}}</dd>\n" +
    "<dt ng-if-start=\"hpa.spec.cpuUtilization.targetPercentage\">\n" +
    "CPU\n" +
    "<span ng-if=\"'cpu' | isRequestCalculated : project\">Limit</span>\n" +
    "<span ng-if=\"!('cpu' | isRequestCalculated : project)\">Request</span>\n" +
    "Target:\n" +
    "</dt>\n" +
    "<dd ng-if-end>{{hpa.spec.cpuUtilization.targetPercentage | hpaCPUPercent : project}}%</dd>\n" +
    "<dt>\n" +
    "Current Usage:\n" +
    "</dt>\n" +
    "<dd ng-if=\"hpa.status.currentCPUUtilizationPercentage | isNil\">\n" +
    "<em>Not available</em>\n" +
    "</dd>\n" +
    "<dd ng-if=\"!(hpa.status.currentCPUUtilizationPercentage | isNil)\">\n" +
    "{{hpa.status.currentCPUUtilizationPercentage | hpaCPUPercent : project}}%\n" +
    "</dd>\n" +
    "<dt ng-if-start=\"hpa.status.lastScaleTime\">Last Scaled:</dt>\n" +
    "<dd ng-if-end><relative-timestamp timestamp=\"hpa.status.lastScaleTime\"></relative-timestamp></dd>\n" +
    "</dl>\n" +
    "\n" +
    "<div ng-hide=\"!('horizontalPodAutoscalers' | canIDoAny)\">\n" +
    "<a ng-if=\"{resource: 'horizontalpodautoscalers', group: 'extensions'} | canI : 'update'\" ng-href=\"project/{{hpa.metadata.namespace}}/edit/autoscaler?kind=HorizontalPodAutoscaler&group=extensions&name={{hpa.metadata.name}}\" role=\"button\">Edit</a>\n" +
    "<span class=\"action-divider\">|</span>\n" +
    "<delete-link ng-if=\"{resource: 'horizontalpodautoscalers', group: 'extensions'} | canI : 'delete'\" kind=\"HorizontalPodAutoscaler\" group=\"extensions\" resource-name=\"{{hpa.metadata.name}}\" project-name=\"{{hpa.metadata.namespace}}\" label=\"Remove\" alerts=\"alerts\" stay-on-current-page=\"true\">\n" +
    "</delete-link>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/istag-select.html',
    "<ng-form name=\"istagForm\">\n" +
    "<fieldset ng-disabled=\"selectDisabled\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"form-group col-sm-4\">\n" +
    "<label class=\"sr-only\">Namespace</label>\n" +
    "<ui-select required ng-model=\"istag.namespace\" ng-change=\"istag.imageStream = null; istag.tagObject = null;\">\n" +
    "<ui-select-match placeholder=\"Namespace\">{{$select.selected}}</ui-select-match>\n" +
    "<ui-select-choices repeat=\"namespace in (namespaces | filter : $select.search)\">\n" +
    "<div ng-bind-html=\"namespace | highlight : $select.search\"></div>\n" +
    "</ui-select-choices>\n" +
    "</ui-select>\n" +
    "<div class=\"istag-separator\">/</div>\n" +
    "</div>\n" +
    "<div class=\"form-group col-sm-4\">\n" +
    "<label class=\"sr-only\">Image Stream</label>\n" +
    "<ui-select required ng-model=\"istag.imageStream\" ng-disabled=\"!istag.namespace\" ng-change=\"istag.tagObject = null\">\n" +
    "<ui-select-match placeholder=\"Image Stream\">{{$select.selected}}</ui-select-match>\n" +
    "<ui-select-choices repeat=\"imageStream in (isNamesByNamespace[istag.namespace] | filter : $select.search)\">\n" +
    "<div ng-bind-html=\"imageStream | highlight : $select.search\"></div>\n" +
    "</ui-select-choices>\n" +
    "</ui-select>\n" +
    "<div class=\"istag-separator\">:</div>\n" +
    "</div>\n" +
    "<div class=\"form-group col-sm-4\">\n" +
    "<label class=\"sr-only\">Tag</label>\n" +
    "<ui-select required ng-model=\"istag.tagObject\" ng-disabled=\"!istag.imageStream\">\n" +
    "<ui-select-match placeholder=\"Tag\">{{$select.selected.tag}}</ui-select-match>\n" +
    "<ui-select-choices group-by=\"groupTags\" repeat=\"statusTag in (isByNamespace[istag.namespace][istag.imageStream].status.tags | filter : { tag: $select.search })\" refresh=\"getTags($select.search)\" refresh-delay=\"0\">\n" +
    "<div ng-bind-html=\"statusTag.tag | highlight : $select.search\"></div>\n" +
    "</ui-select-choices>\n" +
    "</ui-select>\n" +
    "</div>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "</ng-form>"
  );


  $templateCache.put('views/directives/label-editor.html',
    "<osc-form-section header=\"Labels\" about-title=\"labels\" about=\"Labels are used to organize, group, or select objects and resources, such as pods.\" expand=\"expand\" can-toggle=\"canToggle\">\n" +
    "<div ng-if=\"systemLabels.length\">\n" +
    "<div class=\"help-block\">\n" +
    "The following labels are being added automatically. If you want to override them, you can do so below.\n" +
    "</div>\n" +
    "<key-value-editor entries=\"systemLabels\" is-readonly cannot-sort cannot-delete cannot-add key-placeholder=\"Name\"></key-value-editor>\n" +
    "</div>\n" +
    "<div ng-if=\"helpText && ((labels | hashSize) !== 0 || $parent.expand)\" class=\"help-block\">\n" +
    "{{helpText}}\n" +
    "</div>\n" +
    "<div ng-show=\"expand\" ng-class=\"{ 'gutter-top': !helpText }\">\n" +
    "<key-value-editor entries=\"labels\" key-placeholder=\"Name\" key-maxlength=\"63\" key-validator-regex=\"validator.key\" value-placeholder=\"Value\" value-maxlength=\"63\" value-validator-regex=\"validator.val\" key-validator-error-tooltip=\"A valid object label has the form [domain/]name where a name is an alphanumeric (a-z, and 0-9) string,\n" +
    "                                   with a maximum length of 63 characters, with the '-' character allowed anywhere except the first or last\n" +
    "                                   character. A domain is a sequence of names separated by the '.' character with a maximum length of 253 characters.\" value-validator-error-tooltip=\"A valid label value is an alphanumeric (a-z, and 0-9) string, with a maximum length of 63 characters, with the '-'\n" +
    "                                     character allowed anywhere except the first or last character.\" add-row-link=\"Add label\"></key-value-editor>\n" +
    "</div>\n" +
    "<div ng-hide=\"expand\">\n" +
    "<key-value-editor entries=\"labels\" key-placeholder=\"Labels\" cannot-sort cannot-delete cannot-add is-readonly></key-value-editor>\n" +
    "</div>\n" +
    "</osc-form-section>"
  );


  $templateCache.put('views/directives/labels.html',
    "<div row wrap ng-if=\"(labels | hashSize) > 0\">\n" +
    "<span row nowrap ng-repeat=\"(labelKey, labelValue) in labels\" class=\"k8s-label\" ng-if=\"!limit || $index < limit\">\n" +
    "<span row class=\"label-pair\" ng-if=\"clickable\">\n" +
    "<a href=\"\" class=\"label-key label truncate\" ng-click=\"filterAndNavigate(labelKey)\" ng-attr-title=\"All {{titleKind || kind}} with the label '{{labelKey}}' (any value)\">{{labelKey}}</a><a href=\"\" class=\"label-value label truncate\" ng-click=\"filterAndNavigate(labelKey, labelValue)\" ng-attr-title=\"All {{titleKind || kind}} with the label '{{labelKey}}={{labelValue}}'\">{{labelValue}}<span ng-if=\"labelValue === ''\"><em>&lt;empty&gt;</em></span></a>\n" +
    "</span>\n" +
    "<span row class=\"label-pair\" ng-if=\"!clickable\">\n" +
    "<span class=\"label-key label truncate\">{{labelKey}}</span><span class=\"label-value label truncate\">{{labelValue}}</span>\n" +
    "</span>\n" +
    "</span>\n" +
    "<a href=\"\" class=\"small\" ng-click=\"limit = null\" ng-show=\"limit && limit < (labels | hashSize)\" style=\"padding-left: 5px; vertical-align: middle\">More labels...</a>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/logs/_log-raw.html',
    "<pre>\n" +
    "<code>\n" +
    "{{::log}}\n" +
    "</code>\n" +
    "</pre>"
  );


  $templateCache.put('views/directives/logs/_log-viewer.html',
    "<div class=\"log-header\" ng-if=\"!chromeless\">\n" +
    "<div ng-transclude class=\"log-status\"></div>\n" +
    "<div class=\"log-actions\">\n" +
    "<span ng-if=\"kibanaAuthUrl\">\n" +
    "<form action=\"{{kibanaAuthUrl}}\" method=\"POST\">\n" +
    "<input type=\"hidden\" name=\"redirect\" value=\"{{kibanaArchiveUrl}}\">\n" +
    "<input type=\"hidden\" name=\"access_token\" value=\"{{access_token}}\">\n" +
    "<button class=\"btn btn-link\">View archive</button>\n" +
    "</form>\n" +
    "<span ng-if=\"state !== 'empty'\" class=\"action-divider\">|</span>\n" +
    "</span>\n" +
    "<a ng-if=\"state && state !== 'empty'\" href=\"\" ng-click=\"goChromeless(options, fullLogUrl)\" role=\"button\">\n" +
    "Expand log\n" +
    "<i class=\"fa fa-external-link\"></i>\n" +
    "</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"largeLog\" class=\"alert alert-info log-size-warning\">\n" +
    "<span class=\"pficon pficon-info\" aria-hidden=\"true\"></span>\n" +
    "Only the previous {{options.tailLines || 5000}} log lines and new log messages will be displayed because of the large log size.\n" +
    "</div>\n" +
    "\n" +
    "<ellipsis-pulser color=\"dark\" size=\"sm\" display=\"inline\" msg=\"Loading log\" ng-if=\"(!state)\"></ellipsis-pulser>\n" +
    "<div class=\"empty-state-message text-center\" ng-if=\"state=='empty'\" ng-class=\"{'log-fixed-height': fixedHeight}\">\n" +
    "<h2>Logs are not available.</h2>\n" +
    "<p>\n" +
    "{{emptyStateMessage}}\n" +
    "</p>\n" +
    "<div ng-if=\"kibanaAuthUrl\">\n" +
    "<form action=\"{{kibanaAuthUrl}}\" method=\"POST\">\n" +
    "<input type=\"hidden\" name=\"redirect\" value=\"{{kibanaArchiveUrl}}\">\n" +
    "<input type=\"hidden\" name=\"access_token\" value=\"{{access_token}}\">\n" +
    "<button class=\"btn btn-primary btn-lg\">\n" +
    "View Archive\n" +
    "</button>\n" +
    "</form>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-show=\"state=='logs'\">\n" +
    "<div class=\"log-view\" id=\"{{logViewerID}}\" ng-class=\"{'log-fixed-height': fixedHeight}\">\n" +
    "<div ng-show=\"showScrollLinks\" id=\"{{logViewerID}}-affixedFollow\" class=\"log-scroll log-scroll-top\">\n" +
    "<a ng-if=\"loading\" href=\"\" ng-click=\"toggleAutoScroll()\">\n" +
    "<span ng-if=\"!autoScrollActive\">Follow</span>\n" +
    "<span ng-if=\"autoScrollActive\">Stop following</span>\n" +
    "</a>\n" +
    "<a ng-if=\"!loading\" href=\"\" ng-click=\"onScrollBottom()\">\n" +
    "Go to end\n" +
    "</a>\n" +
    "</div>\n" +
    "<div class=\"log-view-output\" id=\"{{logViewerID}}-fixed-scrollable\">\n" +
    "<table>\n" +
    "<tbody id=\"{{logViewerID}}-logContent\"></tbody>\n" +
    "</table>\n" +
    "<div ng-if=\"(!loading) && (!limitReached) && (!errorWhileRunning) && state=='logs'\" class=\"log-end-msg\">\n" +
    "End of log\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<ellipsis-pulser color=\"light\" size=\"md\" ng-show=\"loading\"></ellipsis-pulser>\n" +
    "<div ng-show=\"showScrollLinks\" class=\"log-scroll log-scroll-bottom\">\n" +
    "<a href=\"\" ng-click=\"onScrollTop()\">Go to top</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"limitReached\" class=\"text-muted\">\n" +
    "The maximum web console log size has been reached. Use the command-line interface or\n" +
    "<a href=\"\" ng-click=\"restartLogs()\">reload</a> the log to see new messages.\n" +
    "</div>\n" +
    "<div ng-if=\"errorWhileRunning\" class=\"text-muted\">\n" +
    "An error occurred loading the log.\n" +
    "<a href=\"\" ng-click=\"restartLogs()\">Reload</a>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/metrics-compact.html',
    "<div in-view=\"updateInView($inview)\" in-view-options=\"{ debounce: 50 }\">\n" +
    "<div ng-repeat=\"metric in metrics\" ng-if=\"!metric.compactCombineWith\" class=\"metrics-compact\">\n" +
    "<div ng-attr-id=\"{{metric.chartID}}\" class=\"metrics-sparkline\"></div>\n" +
    "<div class=\"metrics-usage\">\n" +
    "<div class=\"usage-value\">\n" +
    "<span class=\"fade-inline\" ng-hide=\"metric.lastValue | isNil\">{{formatUsage(metric.lastValue)}}</span>\n" +
    "<span ng-if=\"metric.lastValue | isNil\" class=\"text-muted\" aria-hidden=\"true\">\n" +
    "--\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class=\"usage-label\">\n" +
    "{{metric.units | capitalize}} {{metric.compactLabel || metric.label}}\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/osc-autoscaling.html',
    "<ng-form name=\"form\">\n" +
    "<div class=\"autoscaling-form\">\n" +
    "<div ng-show=\"showNameInput\" class=\"form-group\">\n" +
    "<label for=\"hpa-name\" class=\"required\">Autoscaler Name</label>\n" +
    "<span ng-class=\"{ 'has-error': form.name.$touched && form.name.$invalid }\">\n" +
    "<input id=\"hpa-name\" class=\"form-control\" type=\"text\" name=\"name\" ng-model=\"autoscaling.name\" ng-required=\"showNameInput\" ng-readonly=\"nameReadOnly\" ng-pattern=\"/^[a-z0-9]([-a-z0-9]*[a-z0-9])?$/\" ng-maxlength=\"63\" ng-minlength=\"2\" placeholder=\"my-hpa\" select-on-focus autocorrect=\"off\" autocapitalize=\"off\" spellcheck aria-describedby=\"hpa-name-help\">\n" +
    "</span>\n" +
    "<div>\n" +
    "<span id=\"hpa-name-help\" class=\"help-block\">\n" +
    "A unique name for the horizontal pod autoscaler within the project.\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class=\"has-error\" ng-show=\"form.name.$invalid && form.name.$touched\">\n" +
    "<span ng-if=\"form.name.$error.required\" class=\"help-block\">\n" +
    "A name is required.\n" +
    "</span>\n" +
    "<span ng-show=\"form.name.$error.pattern\" class=\"help-block\">\n" +
    "Autoscaler names may only contain lower-case letters, numbers, and dashes. They may not start or end with a dash.\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<label>Min Pods</label>\n" +
    "<span ng-class=\"{ 'has-error': form.minReplicas.$dirty && form.minReplicas.$invalid }\">\n" +
    "<input type=\"number\" class=\"form-control\" min=\"1\" name=\"minReplicas\" placeholder=\"1\" ng-model=\"autoscaling.minReplicas\" ng-required=\"required\" ng-pattern=\"/^\\d+$/\" aria-describedby=\"min-replicas-help\">\n" +
    "</span>\n" +
    "<div id=\"min-replicas-help\" class=\"help-block\">\n" +
    "The lower limit for the number of pods that can be set by the autoscaler. If not specified, defaults to 1.\n" +
    "</div>\n" +
    "<div class=\"has-error\" ng-show=\"form.minReplicas.$dirty && form.minReplicas.$invalid\">\n" +
    "<span ng-if=\"form.minReplicas.$error.number\" class=\"help-block\">\n" +
    "Min pods must be a number.\n" +
    "</span>\n" +
    "<span ng-if=\"form.minReplicas.$error.pattern\" class=\"help-block\">\n" +
    "Min pods must be a whole number.\n" +
    "</span>\n" +
    "<span ng-if=\"form.minReplicas.$error.min\" class=\"help-block\">\n" +
    "Min pods must be greater than or equal to 1.\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<label class=\"required\">Max Pods</label>\n" +
    "<span ng-class=\"{ 'has-error': (form.minReplicas.$dirty || form.maxReplicas.$dirty) && form.maxReplicas.$invalid }\">\n" +
    "<input type=\"number\" class=\"form-control\" name=\"maxReplicas\" placeholder=\"4\" required min=\"{{autoscaling.minReplicas || 1}}\" ng-model=\"autoscaling.maxReplicas\" ng-pattern=\"/^\\d+$/\" aria-describedby=\"max-replicas-help\">\n" +
    "</span>\n" +
    "<div id=\"max-replicas-help\" class=\"help-block\">\n" +
    "The upper limit for the number of pods that can be set by the autoscaler.\n" +
    "</div>\n" +
    "<div class=\"has-error\" ng-show=\"(form.minReplicas.$dirty || form.maxReplicas.$dirty) && form.maxReplicas.$invalid\">\n" +
    "<span ng-if=\"form.maxReplicas.$error.number\" class=\"help-block\">\n" +
    "Max pods must be a number.\n" +
    "</span>\n" +
    "<span ng-if=\"form.minReplicas.$error.pattern\" class=\"help-block\">\n" +
    "Min pods must be a whole number.\n" +
    "</span>\n" +
    "<span class=\"help-block\" ng-if=\"form.maxReplicas.$error.min\">\n" +
    "Max pods must be greater than or equal to\n" +
    "<span ng-if=\"autoscaling.minReplicas\">min pods, which is</span>\n" +
    "{{autoscaling.minReplicas || 1}.\n" +
    "</span>\n" +
    "<span class=\"help-block\" ng-if=\"form.maxReplicas.$error.required\">\n" +
    "Max pods is a required field.\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<label>\n" +
    "CPU\n" +
    "<span ng-if=\"isRequestCalculated\">Limit</span>\n" +
    "<span ng-if=\"!isRequestCalculated\">Request</span>\n" +
    "Target\n" +
    "</label>\n" +
    "<div class=\"input-group\" ng-class=\"{ 'has-error': form.targetCPU.$invalid && form.targetCPU.$touched }\">\n" +
    "<input type=\"number\" class=\"form-control\" min=\"1\" name=\"targetCPU\" ng-attr-placeholder=\"{{defaultTargetCPUDisplayValue}}\" ng-model=\"targetCPUInput.percent\" ng-pattern=\"/^\\d+$/\" aria-describedby=\"target-cpu-help\">\n" +
    "<span class=\"input-group-addon\">%</span>\n" +
    "</div>\n" +
    "<div id=\"target-cpu-help\" class=\"help-block\">\n" +
    "The percentage of the CPU\n" +
    "<span ng-if=\"isRequestCalculated\">limit</span>\n" +
    "<span ng-if=\"!isRequestCalculated\">request</span>\n" +
    "that each pod should ideally be using. Pods will be added or removed periodically when CPU usage exceeds or drops below this target value. Defaults to {{defaultTargetCPUDisplayValue}}%.\n" +
    "</div>\n" +
    "<div class=\"learn-more-block\">\n" +
    "<a href=\"{{'compute_resources' | helpLink}}\" target=\"_blank\">Learn more <i class=\"fa fa-external-link\" aria-hidden> </i></a>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"has-error\" style=\"margin-top: 10px\" ng-show=\"form.targetCPU.$touched && form.targetCPU.$invalid\">\n" +
    "<span ng-if=\"form.targetCPU.$error.number\" class=\"help-block\">\n" +
    "Target CPU percentage must be a number.\n" +
    "</span>\n" +
    "<span ng-if=\"form.targetCPU.$error.pattern\" class=\"help-block\">\n" +
    "Target CPU percentage must be a whole number.\n" +
    "</span>\n" +
    "<span ng-if=\"form.targetCPU.$error.min\" class=\"help-block\">\n" +
    "Target CPU percentage must be greater than 1.\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</ng-form>"
  );


  $templateCache.put('views/directives/osc-file-input.html',
    "<div class=\"input-group\">\n" +
    "<input type=\"text\" class=\"form-control\" ng-model=\"fileName\" readonly ng-show=\"supportsFileUpload\" ng-disabled=\"disabled\" ng-attr-aria-describedby=\"{{helpText ? helpID : undefined}}\">\n" +
    "<span class=\"input-group-btn\">\n" +
    "<span class=\"btn btn-default btn-file\" ng-show=\"supportsFileUpload\" ng-attr-disabled=\"{{ disabled || undefined }}\">\n" +
    "Browse&hellip;\n" +
    "<input type=\"file\" ng-disabled=\"disabled\" class=\"form-control\">\n" +
    "</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "<textarea class=\"form-control\" rows=\"8\" ng-hide=\"supportsFileUpload\" ng-model=\"model\" ng-required=\"required\" ng-disabled=\"disabled\" ng-attr-aria-describedby=\"{{helpText ? helpID : undefined}}\">\n" +
    "</textarea>\n" +
    "<div ng-if=\"helpText\">\n" +
    "<span ng-attr-id=\"{{helpID}}\" class=\"help-block\">{{::helpText}}</span>\n" +
    "</div>\n" +
    "<div class=\"has-error\" ng-show=\"uploadError\">\n" +
    "<span class=\"help-block\">There was an error reading the file. Please copy the file content into the text area.</span>\n" +
    "</div>\n" +
    "<div ng-if=\"model && showValues && supportsFileUpload\">\n" +
    "<pre ng-if=\"model && showValues && supportsFileUpload\" class=\"clipped scroll\">{{model}}</pre>\n" +
    "</div>\n" +
    "<a href=\"\" ng-show=\"model || fileName\" class=\"clear-btn\" ng-click=\"cleanInputValues()\">Clear value</a>"
  );


  $templateCache.put('views/directives/osc-form-section.html',
    "<div class=\"flow\">\n" +
    "<div class=\"flow-block\">\n" +
    "<h2>{{header}}</h2>\n" +
    "</div>\n" +
    "<div class=\"flow-block right\">\n" +
    "<ul class=\"list-inline\">\n" +
    "<li ng-if=\"canToggle\">\n" +
    "<a class=\"action action-inline\" href ng-click=\"toggle()\" ng-hide=\"expand\"><i class=\"pficon pficon-edit\"></i>{{editText}} {{aboutTitle}}</a>\n" +
    "<a class=\"action action-inline\" href ng-click=\"toggle()\" ng-show=\"expand\"><i class=\"pficon pficon-remove\"></i>Collapse</a>\n" +
    "</li>\n" +
    "<li>\n" +
    "<span class=\"help action-inline\">\n" +
    "<i class=\"pficon pficon-help\"></i>\n" +
    "<a href data-toggle=\"tooltip\" data-original-title=\"{{about}}\">About {{aboutTitle}}</a>\n" +
    "</span>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-transclude></div>"
  );


  $templateCache.put('views/directives/osc-image-summary.html',
    "<h1>{{ name || resource.metadata.name }}</h1>\n" +
    "<div class=\"metadata\">\n" +
    "<div ng-show=\"resource | annotation:'version'\">Version {{ resource | annotation:'version' }}</div>\n" +
    "<div ng-show=\"resource | annotation:'provider'\">Provider: {{ resource | annotation:'provider' }}</div>\n" +
    "<div ng-show=\"resource.metadata.namespace\">Namespace: {{ resource.metadata.namespace }}</div>\n" +
    "</div>\n" +
    "<div class=\"resource-description\" ng-bind-html=\"resource | description | linky\"></div>"
  );


  $templateCache.put('views/directives/osc-key-values.html',
    "<ng-form hidden name=\"clean\">\n" +
    "<input name=\"isClean\" ng-model=\"keyValuesClean\">\n" +
    "</ng-form>\n" +
    "<div class=\"labels\">\n" +
    "<div class=\"form-inline labels-edit\" ng-show=\"editable\">\n" +
    "<ng-form class=\"edit-label\" name=\"form\" novalidate>\n" +
    "<div row cross-axis=\"start\">\n" +
    "<div flex grow=\"5\" shrink=\"5\" class=\"form-group\" ng-class=\"{'has-error': form.key.$error.oscKeyValid}\" style=\"margin-right: 10px\">\n" +
    "<input class=\"form-control\" type=\"text\" name=\"key\" ng-attr-placeholder=\"{{keyTitle}}\" ng-model=\"key\" ng-model-options=\"{ debounce: 200 }\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck osc-input-validator=\"key\" osc-unique=\"entries\" on-enter=\"form.$valid && addEntry()\" ng-keyup=\"isClean()\">\n" +
    "</div>\n" +
    "<div flex grow=\"5\" shrink=\"5\" class=\"form-group\" ng-class=\"{'has-error': form.value.$error.oscValueValid}\" style=\"margin-right: 10px\">\n" +
    "<input class=\"form-control\" type=\"text\" name=\"value\" ng-attr-placeholder=\"{{valueTitle}}\" ng-model=\"value\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck osc-input-validator=\"value\" on-enter=\"form.$valid && addEntry()\" ng-keyup=\"isClean()\">\n" +
    "</div>\n" +
    "\n" +
    "<a class=\"btn btn-default add-key-value\" href=\"\" role=\"button\" ng-click=\"addEntry()\" ng-disabled=\"form.$invalid || !key || !value\">\n" +
    "Add\n" +
    "</a>\n" +
    "</div>\n" +
    "<div ng-if=\"showCommmitWarning\" class=\"has-error\">\n" +
    "<span class=\"help-block\">\n" +
    "Please add or <a href=\"\" ng-click=\"clear()\">clear</a> this {{(keyTitle || 'key') | lowercase}}-{{(valueTitle || 'value') | lowercase}} pair\n" +
    "</span>\n" +
    "</div>\n" +
    "<div row class=\"has-error\" ng-show=\"form.key.$error.oscUnique\">\n" +
    "<span class=\"help-block\">\n" +
    "Duplicate {{(keyTitle || 'key') | lowercase}}: {{key}}\n" +
    "</span>\n" +
    "</div>\n" +
    "<div row class=\"has-error\" ng-show=\"form.key.$error.oscKeyValid\">\n" +
    "<span class=\"help-block\">Please enter a valid {{setErrorText(keyValidator)}}\n" +
    "<span class=\"help action-inline\" ng-if=\"keyValidationTooltip\">\n" +
    "<a href=\"\" data-toggle=\"tooltip\" data-original-title=\"{{keyValidationTooltip}}\">\n" +
    "<i class=\"pficon pficon-help\"></i>\n" +
    "</a>\n" +
    "</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "<div row class=\"has-error\" ng-show=\"form.value.$error.oscValueValid\">\n" +
    "<span class=\"help-block\">Please enter a valid value\n" +
    "<span class=\"help action-inline\" ng-if=\"keyValidationTooltip\">\n" +
    "<a href=\"\" data-toggle=\"tooltip\" data-original-title=\"{{valueValidationTooltip}}\">\n" +
    "<i class=\"pficon pficon-help\"></i>\n" +
    "</a>\n" +
    "</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "</ng-form>\n" +
    "<div class=\"gutter-top\">\n" +
    "\n" +
    "<div ng-repeat=\"(key,value) in entries | valuesIn:readonlyKeys\">\n" +
    "<div row cross-axis=\"start\">\n" +
    "<div flex grow=\"5\" shrink=\"5\" class=\"truncate\">{{key}}</div>\n" +
    "<div flex grow=\"5\" shrink=\"5\" style=\"margin-left: 10px\" class=\"truncate\">{{value}}</div>\n" +
    "<div main-axis=\"end\" cross-axis=\"baseline\" style=\"flex-basis: 50px; max-width: 50px\">\n" +
    "&nbsp;\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-repeat=\"(key,value) in entries | valuesNotIn:readonlyKeys\">\n" +
    "<div row cross-axis=\"start\" ng-controller=\"KeyValuesEntryController\">\n" +
    "\n" +
    "<div flex grow=\"5\" shrink=\"5\" class=\"truncate\" ng-attr-title=\"{{key}}\">{{key}}</div>\n" +
    "<div flex grow=\"5\" shrink=\"5\" class=\"truncate\" ng-hide=\"editing\" ng-attr-title=\"{{value}}\" style=\"margin-left: 10px\">\n" +
    "{{value}}\n" +
    "</div>\n" +
    "<div row main-axis=\"end\" cross-axis=\"baseline\" ng-hide=\"editing\" style=\"flex-basis: 50px\">\n" +
    "<a href=\"\" ng-click=\"edit()\" class=\"btn btn-default btn-xs\" title=\"Edit\">\n" +
    "<i class=\"icon icon-pencil\"></i>\n" +
    "</a>\n" +
    "<a href=\"\" ng-click=\"deleteEntry(key)\" class=\"btn btn-default btn-xs\" title=\"Delete\" ng-if=\"allowDelete(key)\">\n" +
    "<i class=\"fa fa-times\"></i>\n" +
    "</a>\n" +
    "</div>\n" +
    "\n" +
    "<div row cross-axis=\"start\" flex grow=\"5\" shrink=\"5\" ng-show=\"editing\">\n" +
    "<input class=\"form-control\" type=\"text\" ng-value=\"value\" ng-model=\"value\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck style=\"margin-left: 6px\">\n" +
    "</div>\n" +
    "<div row main-axis=\"end\" cross-axis=\"baseline\" ng-show=\"editing\" style=\"flex-basis: 50px\">\n" +
    "<div>\n" +
    "<a href=\"\" ng-click=\"update(key, value, $parent.entries)\" class=\"btn btn-default btn-xs\" title=\"Submit\">\n" +
    "<i class=\"icon icon-ok\"></i>\n" +
    "</a>\n" +
    "</div>\n" +
    "<a href=\"\" ng-click=\"cancel()\" class=\"btn btn-default btn-xs\" title=\"Cancel\">\n" +
    "<i class=\"icon icon-remove\"></i>\n" +
    "</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-hide=\"editable\">\n" +
    "<div ng-if=\"(entries | hashSize) === 0\"><strong>None</strong></div>\n" +
    "<ul ng-if=\"(entries | hashSize) !== 0\" class=\"labels-readonly label-list list-unstyled\">\n" +
    "<li ng-repeat=\"(key,value) in entries\">\n" +
    "<span class=\"key truncate\" ng-attr-title=\"{{key}}\">{{key}}</span>\n" +
    "<span class=\"value truncate\" ng-attr-title=\"{{value}}\">{{ value }}</span>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/osc-object-describer.html',
    "<div>\n" +
    "<div ng-if=\"!resource\">\n" +
    "<p>Select an object to see more details.</p>\n" +
    "<span class=\"sidebar-help\">\n" +
    "<p>A <strong>pod</strong> contains one or more Docker containers that run together on a node, containing your application code.</p>\n" +
    "<p>A <strong>service</strong> groups pods and provides a common DNS name and an optional, load-balanced IP address to access them.</p>\n" +
    "<p>A <strong>deployment</strong> is an update to your application, triggered by a changed image or configuration.</p>\n" +
    "</span>\n" +
    "</div>\n" +
    "<kubernetes-object-describer kind=\"{{kind}}\" resource=\"resource\" ng-if=\"resource\"></kubernetes-object-describer>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/osc-persistent-volume-claim.html',
    "<ng-form name=\"persistentVolumeClaimForm\">\n" +
    "<fieldset ng-disabled=\"claimDisabled\">\n" +
    "\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"claim-name\" class=\"required\">Name</label>\n" +
    "<input id=\"claim-name\" class=\"form-control\" type=\"text\" name=\"name\" ng-model=\"claim.name\" ng-required=\"true\" ng-pattern=\"/^[a-z0-9]([-a-z0-9]*[a-z0-9])?$/\" ng-maxlength=\"253\" ng-minlength=\"2\" placeholder=\"my-storage-request\" select-on-focus autocorrect=\"off\" autocapitalize=\"off\" spellcheck aria-describedby=\"claim-name-help\">\n" +
    "<div>\n" +
    "<span id=\"claim-name-help\" class=\"help-block\">A unique name for the storage claim within the project.</span>\n" +
    "</div>\n" +
    "<div class=\"has-error\" ng-show=\"persistentVolumeClaimForm.name.$error.pattern && persistentVolumeClaimForm.name.$touched && !claimDisabled\">\n" +
    "<span class=\"help-block\">\n" +
    "Claim names may only contain lower-case letters, numbers, and dashes. They may not start or end with a dash. Max length of 253.\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<label class=\"required\">Access Mode</label><br/>\n" +
    "<div class=\"radio\">\n" +
    "<label class=\"radio-inline\">\n" +
    "<input type=\"radio\" name=\"accessModes\" ng-model=\"claim.accessModes\" value=\"ReadWriteOnce\" aria-describedby=\"access-modes-help\" ng-checked=\"true\">\n" +
    "Single User (RWO)\n" +
    "</label>\n" +
    "<label class=\"radio-inline\">\n" +
    "<input type=\"radio\" id=\"accessModes\" name=\"accessModes\" ng-model=\"claim.accessModes\" value=\"ReadWriteMany\" aria-describedby=\"access-modes-help\">\n" +
    "Shared Access (RWX)\n" +
    "</label>\n" +
    "<label class=\"radio-inline\">\n" +
    "<input type=\"radio\" name=\"accessModes\" ng-model=\"claim.accessModes\" value=\"ReadOnlyMany\" aria-describedby=\"access-modes-help\">\n" +
    "Read Only (ROX)\n" +
    "</label>\n" +
    "</div>\n" +
    "<div>\n" +
    "<span id=\"access-modes-help\" class=\"help-block\">Permissions to the mounted volume.</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"form-group\">\n" +
    "<fieldset class=\"form-inline compute-resource\">\n" +
    "<label class=\"required\">Capacity</label>\n" +
    "<div ng-class=\"{ 'has-error': form.$invalid }\">\n" +
    "<label class=\"sr-only\">Amount</label>\n" +
    "<input type=\"number\" name=\"amount\" ng-attr-id=\"claim-amount\" ng-model=\"claim.amount\" ng-required=\"true\" min=\"0\" ng-attr-placeholder=\"10\" class=\"form-control\" ng-attr-aria-describedby=\"claim-capacity-help\">\n" +
    "<label class=\"sr-only\">Unit</label>\n" +
    "<select ng-model=\"claim.unit\" name=\"unit\" ng-options=\"option.value as option.label for option in units\" ng-attr-id=\"claim-capacity-unit\" class=\"form-control inline-select\">\n" +
    "</select>\n" +
    "</div>\n" +
    "<div>\n" +
    "<span id=\"claim-capacity-help\" class=\"help-block\">\n" +
    "Size of the storage request.\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class=\"has-error\" ng-show=\"persistentVolumeClaimForm.capacity.$error.pattern && persistentVolumeClaimForm.capacity.$touched && !claimDisabled\">\n" +
    "<span class=\"help-block\">\n" +
    "Must be a postive integer.\n" +
    "</span>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "</ng-form>"
  );


  $templateCache.put('views/directives/osc-routing-service.html',
    "<ng-form name=\"routingServiceForm\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"form-group\" ng-class=\"{ 'col-sm-6': showWeight, 'col-sm-12': !showWeight }\">\n" +
    "<label for=\"{{id}}-service-select\" class=\"required\">\n" +
    "Service\n" +
    "</label>\n" +
    "<select id=\"{{id}}-service-select\" ng-model=\"model.service\" ng-options=\"service as service.metadata.name for service in services\" required class=\"form-control\" ng-attr-aria-describedby=\"{{id}}-service-help\">\n" +
    "</select>\n" +
    "<div>\n" +
    "<span ng-attr-id=\"{{id}}-service-help\" class=\"help-block\">\n" +
    "<span ng-if=\"!isAlternate\">Service to route to.</span>\n" +
    "<span ng-if=\"isAlternate\">Alternate service for route traffic.</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "<div ng-if=\"(services | hashSize) === 0\" class=\"has-error\">\n" +
    "<span class=\"help-block\">\n" +
    "There are no <span ng-if=\"is-alternate\">additional</span> services in your project to expose with a route.\n" +
    "</span>\n" +
    "</div>\n" +
    "<div ng-if=\"unnamedServicePort\" class=\"has-warning\">\n" +
    "<span class=\"help-block\">\n" +
    "Service {{route.service.metadata.name}} has a single, unnamed port. A route cannot specifically target an unnamed service port. If more service ports are added later, the route will also direct traffic to them.\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"showWeight\" class=\"form-group col-sm-6\">\n" +
    "<label for=\"{{id}}-service-weight\" class=\"required\">Weight</label>\n" +
    "<input ng-model=\"model.weight\" name=\"weight\" id=\"{{id}}-service-weight\" type=\"number\" required min=\"0\" max=\"256\" ng-pattern=\"/^\\d+$/\" class=\"form-control\" aria-describedby=\"{{id}}-weight-help\">\n" +
    "<div>\n" +
    "<span id=\"{{id}}-weight-help\" class=\"help-block\">\n" +
    "Weight is a number between 0 and 256 that specifies the relative weight against other route services.\n" +
    "</span>\n" +
    "<div ng-if=\"routingServiceForm.weight.$dirty && routingServiceForm.weight.$invalid\" class=\"has-error\">\n" +
    "<div ng-if=\"routingServiceForm.weight.$error.number\" class=\"help-block\">\n" +
    "Must be a number.\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"routingServiceForm.weight.$error.pattern\" class=\"help-block\">\n" +
    "Must be a whole number greater than or equal to 0.\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</ng-form>"
  );


  $templateCache.put('views/directives/osc-routing.html',
    "<ng-form name=\"routeForm\">\n" +
    "<fieldset ng-disabled=\"routingDisabled\">\n" +
    "\n" +
    "<div ng-show=\"showNameInput\" class=\"form-group\">\n" +
    "<label for=\"route-name\" class=\"required\">Name</label>\n" +
    "\n" +
    "<input id=\"route-name\" class=\"form-control\" type=\"text\" name=\"name\" ng-model=\"route.name\" ng-required=\"showNameInput\" ng-pattern=\"/^[a-z0-9]([-a-z0-9]*[a-z0-9])?$/\" ng-maxlength=\"63\" ng-minlength=\"2\" placeholder=\"my-route\" select-on-focus autocorrect=\"off\" autocapitalize=\"off\" spellcheck aria-describedby=\"route-name-help\">\n" +
    "<div>\n" +
    "<span id=\"route-name-help\" class=\"help-block\">A unique name for the route within the project.</span>\n" +
    "</div>\n" +
    "<div class=\"has-error\" ng-show=\"routeForm.name.$error.pattern && routeForm.name.$touched && !routingDisabled\">\n" +
    "<span class=\"help-block\">\n" +
    "Route names may only contain lower-case letters, numbers, and dashes. They may not start or end with a dash.\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"host\">Hostname</label>\n" +
    "\n" +
    "<input id=\"host\" class=\"form-control\" type=\"text\" name=\"host\" ng-model=\"route.host\" ng-pattern=\"/^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$/\" ng-maxlength=\"253\" ng-readonly=\"hostReadOnly\" placeholder=\"www.example.com\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck aria-describedby=\"route-host-help\">\n" +
    "<div>\n" +
    "<span id=\"route-host-help\" class=\"help-block\">\n" +
    "Public hostname for the route.\n" +
    "<span ng-if=\"!hostReadOnly\">If not specified, a hostname is generated.</span>\n" +
    "The hostname can't be changed after the route is created.\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class=\"has-error\" ng-show=\"routeForm.host.$error.pattern && routeForm.host.$touched && !routingDisabled\">\n" +
    "<span class=\"help-block\">\n" +
    "Hostname must consist of lower-case letters, numbers, periods, and hyphens. It must start and end with a letter or number.\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"path\">Path</label>\n" +
    "<input id=\"path\" class=\"form-control\" type=\"text\" name=\"path\" ng-model=\"route.path\" ng-pattern=\"/^\\/.*$/\" ng-disabled=\"route.tls.termination === 'passthrough'\" placeholder=\"/\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck aria-describedby=\"route-path-help\">\n" +
    "<div>\n" +
    "<span id=\"route-path-help\" class=\"help-block\">\n" +
    "Path that the router watches to route traffic to the service.\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class=\"has-error\" ng-show=\"routeForm.path.$error.pattern && routeForm.path.$touched && !routingDisabled\">\n" +
    "<span class=\"help-block\">\n" +
    "Path must start with <code>/</code>\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class=\"has-warning\" ng-show=\"route.path && route.tls.termination === 'passthrough'\">\n" +
    "<span class=\"help-block\">\n" +
    "Path value will not be used. Paths cannot be set for passthrough TLS.\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"services\">\n" +
    "<osc-routing-service model=\"route.to\" services=\"services\" show-weight=\"route.alternateServices.length\">\n" +
    "</osc-routing-service>\n" +
    "</div>\n" +
    "<div ng-if=\"alternateServiceOptions.length && !route.alternateServices.length\" class=\"form-group\">\n" +
    "<a href=\"\" ng-click=\"addAlternateService()\">Split traffic across multiple services</a>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"route.portOptions.length\" class=\"form-group\">\n" +
    "<label for=\"routeTargetPort\">Target Port</label>\n" +
    "<select id=\"routeTargetPort\" ng-if=\"route.portOptions.length\" ng-model=\"route.targetPort\" ng-options=\"portOption.port as portOption.label for portOption in route.portOptions\" class=\"form-control\" aria-describedby=\"target-port-help\">\n" +
    "</select>\n" +
    "<div>\n" +
    "<span id=\"target-port-help\" class=\"help-block\">\n" +
    "Target port for traffic.\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"route.alternateServices.length\">\n" +
    "<h3>Alternate Services</h3>\n" +
    "<div ng-repeat=\"alternate in route.alternateServices\" class=\"form-group\">\n" +
    "<osc-routing-service model=\"alternate\" services=\"alternateServiceOptions\" is-alternate=\"true\" show-weight=\"true\">\n" +
    "</osc-routing-service>\n" +
    "<a href=\"\" ng-click=\"route.alternateServices.splice($index, 1)\">Remove service</a>\n" +
    "<span ng-if=\"$last && route.alternateServices.length < alternateServiceOptions.length\">\n" +
    "<span class=\"action-divider\">|</span>\n" +
    "<a href=\"\" ng-click=\"addAlternateService()\">Add another service</a>\n" +
    "</span>\n" +
    "</div>\n" +
    "<div ng-repeat=\"duplicate in duplicateServices\" class=\"has-error mar-bottom-lg\">\n" +
    "<span class=\"help-block\">\n" +
    "Service {{duplicate.metadata.name}} cannot be added twice.\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div>\n" +
    "<a href=\"\" ng-click=\"showSecureRouteOptions = true\" ng-show=\"!showSecureRouteOptions\">Show options for secured routes</a>\n" +
    "</div>\n" +
    "<div ng-show=\"showSecureRouteOptions\">\n" +
    "<h3>Route Type</h3>\n" +
    "<div>\n" +
    "<span class=\"help-block\">\n" +
    "Routes can be secured using several TLS termination types for serving certificates.\n" +
    "</span>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"form-group\">\n" +
    "<label>TLS Termination</label>\n" +
    "<select ng-model=\"route.tls.termination\" class=\"form-control\">\n" +
    "<option value=\"\">None</option>\n" +
    "<option value=\"edge\">Edge</option>\n" +
    "<option value=\"passthrough\">Passthrough</option>\n" +
    "<option value=\"reencrypt\">Re-encrypt</option>\n" +
    "</select>\n" +
    "<div class=\"learn-more-block help-block\">\n" +
    "<a href=\"{{'route-types' | helpLink}}\" target=\"_blank\">Learn more <i class=\"fa fa-external-link\"></i></a>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"form-group\">\n" +
    "<label>Insecure Traffic</label>\n" +
    "<select ng-model=\"route.tls.insecureEdgeTerminationPolicy\" ng-disabled=\"route.tls.termination !== 'edge'\" class=\"form-control\" aria-describedby=\"route-insecure-policy-help\">\n" +
    "<option value=\"\">None</option>\n" +
    "<option value=\"Allow\">Allow</option>\n" +
    "<option value=\"Redirect\">Redirect</option>\n" +
    "</select>\n" +
    "<div>\n" +
    "<span id=\"route-insecure-policy-help\" class=\"help-block\">\n" +
    "Policy for traffic on insecure schemes like HTTP for edge termination.\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<h3>Certificates</h3>\n" +
    "<div>\n" +
    "<span class=\"help-block\">\n" +
    "TLS certificates for edge and re-encrypt termination. If not specified, the router's default certificate is used.\n" +
    "</span>\n" +
    "</div>\n" +
    "<div ng-if=\"showCertificatesNotUsedWarning\" class=\"has-warning\">\n" +
    "<span class=\"help-block\">\n" +
    "The certificate or key you've set will not be used.\n" +
    "<span ng-if=\"!route.tls.termination\">\n" +
    "The route is unsecured.\n" +
    "</span>\n" +
    "<span ng-if=\"route.tls.termination === 'passthrough'\">\n" +
    "Custom certificates cannot be used with passthrough termination.\n" +
    "</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "<fieldset>\n" +
    "<div>\n" +
    "<div class=\"form-group\" id=\"certificate-file\">\n" +
    "<label>Certificate</label>\n" +
    "<osc-file-input model=\"route.tls.certificate\" drop-zone-id=\"certificate-file\" show-values=\"true\" help-text=\"The PEM format certificate. Upload file by dragging & dropping, or selecting it.\" ng-disabled=\"disableCertificateInputs()\">\n" +
    "</osc-file-input>\n" +
    "</div>\n" +
    "<div class=\"form-group\" id=\"private-key-file\">\n" +
    "<label>Private Key</label>\n" +
    "<osc-file-input model=\"route.tls.key\" drop-zone-id=\"private-key-file\" show-values=\"true\" help-text=\"The PEM format key. Upload file by dragging & dropping, or selecting it.\" ng-disabled=\"disableCertificateInputs()\">\n" +
    "</osc-file-input>\n" +
    "</div>\n" +
    "<div class=\"form-group\" id=\"ca-certificate-file\">\n" +
    "<label>CA Certificate</label>\n" +
    "<osc-file-input model=\"route.tls.caCertificate\" drop-zone-id=\"ca-certificate-file\" show-values=\"true\" help-text=\"The PEM format CA certificate. Upload file by dragging & dropping, or selecting it.\" ng-disabled=\"disableCertificateInputs()\">\n" +
    "</osc-file-input>\n" +
    "</div>\n" +
    "<div class=\"form-group\" id=\"dest-ca-certificate-file\">\n" +
    "<label>Destination CA Certificate</label>\n" +
    "<osc-file-input model=\"route.tls.destinationCACertificate\" show-values=\"true\" drop-zone-id=\"dest-ca-certificate-file\" help-text=\"The PEM format CA certificate to validate the endpoint certificate for re-encrypt termination. Upload file by dragging & dropping, or selecting it.\" ng-disabled=\"route.tls.termination !== 'reencrypt'\">\n" +
    "</osc-file-input>\n" +
    "\n" +
    "<div ng-if=\"route.tls.destinationCACertificate && route.tls.termination !== 'reencrypt' && !showCertificatesNotUsedWarning\" class=\"has-warning\">\n" +
    "<span class=\"help-block\">\n" +
    "The destination CA certificate will not be used. Destination CA certificates are only used for re-encrypt termination.\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "</ng-form>"
  );


  $templateCache.put('views/directives/pipeline-status.html',
    "<div class=\"pipeline-status-bar\" ng-class=\"status\">\n" +
    "<div class=\"pipeline-line\"></div>\n" +
    "<div class=\"pipeline-circle\">\n" +
    "<div class=\"clip1\"></div>\n" +
    "<div class=\"clip2\"></div>\n" +
    "<div class=\"inner-circle\">\n" +
    "<div class=\"inner-circle-fill\"></div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/pod-donut.html',
    "<div ng-attr-id=\"{{chartId}}\" class=\"pod-donut\"></div>\n" +
    "\n" +
    "<div class=\"sr-only\">\n" +
    "<div ng-if=\"(pods | hashSize) === 0\">No pods.</div>\n" +
    "<div ng-if=\"(pods | hashSize) !== 0\">\n" +
    "Pod status:\n" +
    "<span ng-repeat=\"column in podStatusData\" ng-if=\"column[1]\">{{column[1]}} {{column[0]}}</span>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/pod-metrics.html',
    "<div class=\"metrics\" ng-if=\"pod || deployment\">\n" +
    "<div ng-show=\"!metricsError\" class=\"metrics-options\">\n" +
    "\n" +
    "<div ng-if=\"pod.spec.containers.length\" class=\"form-group\">\n" +
    "<label for=\"selectContainer\">Container:</label>\n" +
    "<div class=\"select-container\">\n" +
    "<span ng-show=\"pod.spec.containers.length === 1\">\n" +
    "{{pod.spec.containers[0].name}}\n" +
    "</span>\n" +
    "<select id=\"selectContainer\" ng-show=\"pod.spec.containers.length > 1\" ng-init=\"options.selectedContainer = pod.spec.containers[0]\" ng-model=\"options.selectedContainer\" ng-options=\"container.name for container in pod.spec.containers track by container.name\">\n" +
    "</select>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"timeRange\">Time Range:</label>\n" +
    "<select id=\"timeRange\" ng-model=\"options.timeRange\" ng-options=\"range.label for range in options.rangeOptions\" ng-disabled=\"metricsError\">\n" +
    "</select>\n" +
    "</div>\n" +
    "</div>\n" +
    "<ellipsis-pulser color=\"dark\" size=\"sm\" msg=\"Loading metrics\" ng-if=\"!loaded\"></ellipsis-pulser>\n" +
    "<div ng-if=\"loaded && noData && !metricsError\" class=\"mar-top-md\">No metrics to display.</div>\n" +
    "<div ng-if=\"metricsError\" class=\"empty-state-message text-center\">\n" +
    "<h2>\n" +
    "<span class=\"pficon pficon-error-circle-o\" aria-hidden=\"true\"></span>\n" +
    "Metrics are not available.\n" +
    "</h2>\n" +
    "<p>\n" +
    "An error occurred getting metrics<span ng-if=\"options.selectedContainer.name\">\n" +
    "for container {{options.selectedContainer.name}}</span><span ng-if=\"metricsURL\">\n" +
    "from <a ng-href=\"{{metricsURL}}\">{{metricsURL}}</a></span>.\n" +
    "</p>\n" +
    "<p class=\"text-muted\">\n" +
    "{{metricsError.details}}\n" +
    "</p>\n" +
    "</div>\n" +
    "<div ng-repeat=\"metric in metrics\" ng-if=\"!noData && !metricsError\" class=\"metrics-full\">\n" +
    "<h3 class=\"metric-label\">\n" +
    "{{metric.label}}\n" +
    "<small ng-if=\"pod.spec.containers.length > 1\">\n" +
    "<span ng-if=\"metric.containerMetric\">Container Metrics</span>\n" +
    "<span ng-if=\"!metric.containerMetric\">Pod Metrics</span>\n" +
    "</small>\n" +
    "<small ng-if=\"deployment\">\n" +
    "Total for All Pods\n" +
    "</small>\n" +
    "</h3>\n" +
    "\n" +
    "\n" +
    "<div ng-if=\"metric.datasets[0].total\" class=\"utilization-trend-chart-pf\">\n" +
    "<div class=\"current-values\" ng-if=\"metric.datasets[0].available >= 0\">\n" +
    "<h1 class=\"available-count pull-left\">\n" +
    "{{metric.datasets[0].available}}\n" +
    "</h1>\n" +
    "<div class=\"available-text pull-left\">\n" +
    "<div>Available of</div>\n" +
    "<div>{{metric.datasets[0].total}} {{metric.units}}</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"current-values\" ng-if=\"metric.datasets[0].available < 0\">\n" +
    "<h1 class=\"available-count pull-left\">\n" +
    "{{metric.datasets[0].available | abs}}\n" +
    "</h1>\n" +
    "<div class=\"available-text pull-left\">\n" +
    "<div><strong>Over limit of</strong></div>\n" +
    "<div>{{metric.datasets[0].total}} {{metric.units}}</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div style=\"clear: both\"></div>\n" +
    "\n" +
    "<div ng-if=\"metric.datasets[0].total\" ng-attr-id=\"{{metric.chartPrefix + uniqueID}}-donut\" class=\"metrics-donut\"></div>\n" +
    "\n" +
    "<div ng-attr-id=\"{{metric.chartPrefix + uniqueID}}-sparkline\" class=\"metrics-sparkline\"></div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/pods-table.html',
    "<table class=\"table table-bordered table-hover table-mobile\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Name</th>\n" +
    "<th>Status</th>\n" +
    "<th>Containers Ready</th>\n" +
    "<th>Container Restarts</th>\n" +
    "<th>Age</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody ng-if=\"(pods | hashSize) == 0\">\n" +
    "<tr><td colspan=\"5\"><em>{{emptyMessage || 'No pods to show'}}</em></td></tr>\n" +
    "</tbody>\n" +
    "<tbody ng-repeat=\"pod in pods | orderObjectsByDate : true\">\n" +
    "<tr>\n" +
    "<td data-title=\"Name\">\n" +
    "<a href=\"{{pod | navigateResourceURL}}\">{{pod.metadata.name}}</a>\n" +
    "<span ng-if=\"pod | isTroubledPod\">\n" +
    "<pod-warnings pod=\"pod\"></pod-warnings>\n" +
    "</span>\n" +
    "<span ng-if=\"pod | isDebugPod\">\n" +
    "<i class=\"fa fa-bug info-popover\" aria-hidden=\"true\" data-toggle=\"popover\" data-trigger=\"hover\" dynamic-content=\"Debugging pod {{pod | debugPodSourceName}}\"></i>\n" +
    "<span class=\"sr-only\">Debugging pod {{pod | debugPodSourceName}}</span>\n" +
    "</span>\n" +
    "</td>\n" +
    "<td data-title=\"Status\">\n" +
    "<div row class=\"status\">\n" +
    "<status-icon status=\"pod | podStatus\" disable-animation></status-icon>\n" +
    "<span flex>{{pod | podStatus | sentenceCase}}</span>\n" +
    "</div>\n" +
    "</td>\n" +
    "<td data-title=\"Ready\">{{pod | numContainersReady}}/{{pod.spec.containers.length}}</td>\n" +
    "<td data-title=\"Restarts\">{{pod | numContainerRestarts}}</td>\n" +
    "<td data-title=\"Age\"><relative-timestamp timestamp=\"pod.metadata.creationTimestamp\" drop-suffix=\"true\"></relative-timestamp></td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>"
  );


  $templateCache.put('views/directives/replicas.html',
    "<span ng-show=\"!model.editing\">\n" +
    "<span ng-if=\"status === undefined\">{{spec}} replica<span ng-if=\"spec !== 1\">s</span></span>\n" +
    "<span ng-if=\"status !== undefined\">{{status}} current / {{spec}} desired</span>\n" +
    "<a href=\"\" title=\"Edit\" class=\"action-button\" ng-if=\"!disableScaling && scaleFn && (deployment | canIScale)\" ng-click=\"model.desired = spec; model.editing = true\">\n" +
    "<i class=\"icon icon-pencil\" style=\"margin-left: 5px\"></i>\n" +
    "<span class=\"sr-only\">Edit</span>\n" +
    "</a>\n" +
    "</span>\n" +
    "<span ng-show=\"!disableScaling && model.editing\">\n" +
    "<form name=\"form.scaling\" ng-submit=\"scale()\" class=\"form-inline\">\n" +
    "<span ng-class=\"{'has-error': form.scaling.$invalid}\">\n" +
    "<input type=\"number\" name=\"desired\" ng-model=\"model.desired\" ng-required=\"true\" min=\"0\" ng-pattern=\"/^\\-?\\d+$/\" focus-when=\"{{model.editing}}\" select-on-focus class=\"input-number\">\n" +
    "</span>\n" +
    "<a href=\"\" title=\"Scale\" class=\"action-button\" ng-attr-aria-disabled=\"{{form.scaling.$invalid ? 'true' : undefined}}\" ng-click=\"scale()\" role=\"button\">\n" +
    "<i class=\"icon icon-ok\" style=\"margin-left: 5px\"></i>\n" +
    "<span class=\"sr-only\">Scale</span>\n" +
    "</a>\n" +
    "<a href=\"\" title=\"Cancel\" class=\"action-button\" ng-click=\"cancel()\" role=\"button\">\n" +
    "<i class=\"icon icon-remove\" style=\"margin-left: 5px\"></i>\n" +
    "<span class=\"sr-only\">Cancel</span>\n" +
    "</a>\n" +
    "<div ng-if=\"form.scaling.$invalid\" class=\"has-error\">\n" +
    "<div ng-if=\"form.scaling.desired.$error.required\" class=\"help-block\">\n" +
    "A value for replicas is required.\n" +
    "</div>\n" +
    "<div ng-if=\"form.scaling.desired.$error.pattern\" class=\"help-block\">\n" +
    "Replicas must be a whole number.\n" +
    "</div>\n" +
    "<div ng-if=\"form.scaling.desired.$error.min\" class=\"help-block\">\n" +
    "Replicas can't be negative.\n" +
    "</div>\n" +
    "</div>\n" +
    "</form>\n" +
    "</span>"
  );


  $templateCache.put('views/directives/selector.html',
    "<div ng-if=\"!selector\">none</div>\n" +
    "<div ng-if=\"selector\">\n" +
    "<div ng-if=\"selector.matchLabels || selector.matchExpressions\">\n" +
    "<div ng-repeat=\"(selectorLabel, selectorValue) in selector.matchLabels\">\n" +
    "{{selectorLabel}}={{selectorValue}}\n" +
    "</div>\n" +
    "<div ng-repeat=\"requirement in selector.matchExpressions\">\n" +
    "{{requirement.key}} {{requirement.operator | startCase | lowercase}}\n" +
    "<span ng-repeat=\"value in requirement.values\">\n" +
    "<span ng-if=\"$first\">(</span>{{value}}<span ng-if=\"!$last\">, </span><span ng-if=\"$last\">)</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"!selector.matchLabels && !selector.matchExpressions\">\n" +
    "<div ng-repeat=\"(selectorLabel, selectorValue) in selector\">\n" +
    "{{selectorLabel}}={{selectorValue}}\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/directives/service-group-notifications.html',
    "<alerts alerts=\"alerts\" filter=\"showAlert\" toast=\"true\"></alerts>"
  );


  $templateCache.put('views/directives/truncate-long-text.html',
    "<span ng-if=\"!truncated\">{{content}}</span>\n" +
    "<span ng-if=\"truncated\">\n" +
    "<span ng-if=\"!toggles.expanded\">\n" +
    "<span ng-attr-title=\"{{content}}\">{{truncatedContent}}&hellip;</span>\n" +
    "<a ng-if=\"expandable\" href=\"\" ng-click=\"toggles.expanded = true\" style=\"margin-left: 5px; white-space: nowrap\">See all</a>\n" +
    "</span>\n" +
    "<span ng-if=\"toggles.expanded\">\n" +
    "<div ng-if=\"prettifyJson\" class=\"well\">\n" +
    "<span class=\"pull-right\" style=\"margin-top: -10px\"><a href=\"\" ng-click=\"toggles.expanded = false\">Collapse</a></span>\n" +
    "<span class=\"pretty-json\">{{content | prettifyJSON}}</span>\n" +
    "</div>\n" +
    "<span ng-if=\"!prettifyJson\">\n" +
    "<span class=\"pull-right\"><a href=\"\" ng-click=\"toggles.expanded = false\">Collapse</a></span>\n" +
    "{{content}}\n" +
    "</span>\n" +
    "</span>\n" +
    "</span>"
  );


  $templateCache.put('views/edit/autoscaler.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"middle surface-shaded\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container surface-shaded\" style=\"max-width: 900px\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"!targetKind || !targetName || !project\" class=\"mar-top-md\">\n" +
    "Loading...\n" +
    "</div>\n" +
    "<form name=\"form\" ng-submit=\"save()\" class=\"osc-form\" ng-show=\"targetKind && targetName\">\n" +
    "<h1>\n" +
    "Autoscale {{targetKind | humanizeKind : true}} {{targetName}}\n" +
    "</h1>\n" +
    "<div class=\"help-block\">\n" +
    "Scale replicas automatically based on CPU usage.\n" +
    "</div>\n" +
    "<div class=\"learn-more-block\" ng-class=\"{ 'gutter-bottom': metricsWarning || showCPURequestWarning }\">\n" +
    "<a href=\"{{'pod_autoscaling' | helpLink}}\" target=\"_blank\">Learn more <i class=\"fa fa-external-link\" aria-hidden> </i></a>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"metricsWarning\" class=\"alert alert-warning\">\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" aria-hidden=\"true\"></span>\n" +
    "<span class=\"sr-only\">Warning:</span>\n" +
    "Metrics might not be configured by your cluster administrator. Metrics are required for autoscaling.\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"showCPURequestWarning\" class=\"alert alert-warning\">\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" aria-hidden=\"true\"></span>\n" +
    "<span class=\"sr-only\">Warning:</span>\n" +
    "This {{targetKind | humanizeKind}} does not have any containers with a CPU\n" +
    "<span ng-if=\"'cpu' | isRequestCalculated : project\">limit</span>\n" +
    "<span ng-if=\"!('cpu' | isRequestCalculated : project)\">request</span>\n" +
    "set. Autoscaling will not work without a CPU\n" +
    "<span ng-if=\"'cpu' | isRequestCalculated : project\">limit.</span>\n" +
    "<span ng-if=\"!('cpu' | isRequestCalculated : project)\">request.</span>\n" +
    "</div>\n" +
    "<fieldset ng-disabled=\"disableInputs\" class=\"gutter-top\">\n" +
    "<osc-autoscaling model=\"autoscaling\" project=\"project\" show-name-input=\"true\" name-read-only=\"kind === 'HorizontalPodAutoscaler'\">\n" +
    "</osc-autoscaling>\n" +
    "<label-editor labels=\"labels\" expand=\"true\" can-toggle=\"false\"></label-editor>\n" +
    "<div class=\"buttons gutter-top\">\n" +
    "<button type=\"submit\" class=\"btn btn-primary btn-lg\" ng-disabled=\"form.$invalid || form.$pristine\">\n" +
    "Save\n" +
    "</button>\n" +
    "<a href=\"\" class=\"btn btn-default btn-lg\" back>Cancel</a>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "</form>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/edit/build-config.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"middle surface-shaded\">\n" +
    "\n" +
    "<div class=\"middle-section\" ng-show=\"buildConfig\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container surface-shaded\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"!loaded\">Loading...</div>\n" +
    "<h1>\n" +
    "Edit Build Config {{buildConfig.metadata.name}}\n" +
    "<small>&mdash; {{strategyType | startCase}} Build Strategy</small>\n" +
    "</h1>\n" +
    "<fieldset ng-disabled=\"disableInputs\">\n" +
    "<form class=\"edit-form\" name=\"form\" novalidate ng-submit=\"save()\">\n" +
    "<div class=\"resource-details\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-lg-6\">\n" +
    "<div ng-if=\"buildConfig.spec.source.type !== 'None'\" class=\"section\">\n" +
    "<h3>Source Configuration</h3>\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<div ng-if=\"sources.git\">\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"sourceUrl\">Source Repository URL</label>\n" +
    "<div>\n" +
    "\n" +
    "<input class=\"form-control\" id=\"sourceUrl\" name=\"sourceUrl\" ng-model=\"updatedBuildConfig.spec.source.git.uri\" type=\"text\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck required>\n" +
    "</div>\n" +
    "<div>\n" +
    "<span class=\"text-warning\" ng-if=\"form.sourceUrl.$dirty && !sourceURLPattern.test(updatedBuildConfig.spec.source.git.uri)\">Git repository should be a URL.</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-group editor\">\n" +
    "<label for=\"sourceRef\">Source Repository Ref</label>\n" +
    "<div>\n" +
    "<input class=\"form-control\" id=\"sourceRef\" name=\"sourceRef\" type=\"text\" ng-model=\"updatedBuildConfig.spec.source.git.ref\" placeholder=\"master\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"sourceContextDir\">Source Context Dir</label>\n" +
    "<div>\n" +
    "<input class=\"form-control\" id=\"sourceContextDir\" name=\"sourceContextDir\" type=\"text\" ng-model=\"updatedBuildConfig.spec.source.contextDir\" placeholder=\"/\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"sources.dockerfile\">\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"buildFrom\">Dockerfile</label>\n" +
    "<div ui-ace=\"{\n" +
    "                                mode: 'dockerfile',\n" +
    "                                theme: 'dreamweaver',\n" +
    "                                onLoad: aceLoaded,\n" +
    "                                rendererOptions: {\n" +
    "                                  fadeFoldWidgets: true,\n" +
    "                                  showPrintMargin: false\n" +
    "                                }\n" +
    "                              }\" ng-model=\"updatedBuildConfig.spec.source.dockerfile\" class=\"ace-bordered ace-inline dockerfile-mode\"></div>\n" +
    "</div>\n" +
    "<div class=\"form-group\" ng-if=\"updatedBuildConfig.spec.strategy.dockerStrategy.dockerfilePath\">\n" +
    "<label for=\"dockerfilePath\">Dockerfile Path</label>\n" +
    "<div>\n" +
    "<input class=\"form-control\" id=\"dockerfilePath\" name=\"dockerfilePath\" type=\"text\" ng-model=\"updatedBuildConfig.spec.strategy.dockerStrategy.dockerfilePath\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-group\" ng-if=\"strategyType === 'Docker'\">\n" +
    "<div class=\"checkbox\">\n" +
    "<label>\n" +
    "<input type=\"checkbox\" ng-model=\"options.noCache\"/>\n" +
    "Execute docker build without reusing cached instructions.\n" +
    "<span class=\"help action-inline\">\n" +
    "<a href>\n" +
    "<i class=\"pficon pficon-help\" data-toggle=\"tooltip\" aria-hidden=\"true\" data-original-title=\"Will run the docker build with '--no-cache=true' flag\">\n" +
    "</i>\n" +
    "</a>\n" +
    "</span>\n" +
    "</label>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"sources.binary && updatedBuildConfig.spec.source\">\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"binaryAsBuild\">\n" +
    "Binary Input As File\n" +
    "<span class=\"help action-inline\">\n" +
    "<a href>\n" +
    "<i class=\"pficon pficon-help\" data-toggle=\"tooltip\" aria-hidden=\"true\" data-original-title=\"Indicates that the provided binary input should be considered a single file within the build input. For example, specifying 'webapp.war' would place the provided binary as '/webapp.war' for the builder. If left empty, the Docker and Source build strategies assume this file is a zip, tar, or tar.gz file and extract it as the source. The custom strategy receives this binary as standard input. This filename may not contain slashes or be '..' or '.'.\"></i>\n" +
    "</a>\n" +
    "</span>\n" +
    "</label>\n" +
    "<div>\n" +
    "<input class=\"form-control\" id=\"binaryAsBuild\" name=\"binaryAsBuild\" type=\"text\" ng-model=\"options.binaryAsFile\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-groups\" ng-show=\"sources.images\">\n" +
    "<div class=\"single-image-source\" ng-if=\"sourceImages.length === 1\">\n" +
    "<div class=\"form-group\">\n" +
    "<label>Image Source From</label>\n" +
    "<ui-select required ng-model=\"imageOptions.fromSource.type\" search-enabled=\"false\">\n" +
    "<ui-select-match>{{$select.selected | startCase}}</ui-select-match>\n" +
    "<ui-select-choices repeat=\"type in imageSourceTypes\">\n" +
    "{{type | startCase}}\n" +
    "</ui-select-choices>\n" +
    "</ui-select>\n" +
    "</div>\n" +
    "<div class=\"form-group\" ng-if=\"imageOptions.fromSource.type==='ImageStreamTag'\">\n" +
    "<istag-select include-shared-namespace=\"true\" model=\"imageOptions.fromSource.imageStreamTag\"></istag-select>\n" +
    "</div>\n" +
    "<div ng-if=\"imageOptions.fromSource.type==='ImageStreamImage'\" class=\"form-group\">\n" +
    "<label for=\"imageSourceImage\">Image Stream Image</label>\n" +
    "<div>\n" +
    "<input class=\"form-control\" type=\"text\" ng-model=\"imageOptions.fromSource.imageStreamImage\" placeholder=\"example: openshift/ruby-20-centos7@603bfa418\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck required>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"imageOptions.fromSource.type==='DockerImage'\" class=\"form-group\">\n" +
    "<label for=\"imageSourceLink\">Docker Image Repository</label>\n" +
    "<div>\n" +
    "<input class=\"form-control\" id=\"imageSourceLink\" name=\"imageSourceLink\" type=\"text\" ng-model=\"imageOptions.fromSource.dockerImage\" placeholder=\"example: centos/ruby-20-centos7:latest\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck required>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"buildFrom\">Source and Destination Paths<span class=\"help action-inline\">\n" +
    "<a href>\n" +
    "<i class=\"pficon pficon-help\" data-toggle=\"tooltip\" aria-hidden=\"true\" data-original-title=\"Paths is a list of source and destination paths to copy from the image. At least one pair has to be specified.\"></i>\n" +
    "</a>\n" +
    "</span></label>\n" +
    "<key-value-editor entries=\"imageSourcePaths\" key-placeholder=\"Source Path\" key-validator=\"\\/.*?$\" value-placeholder=\"Destination Dir\" key-validator-error-tooltip=\"A valid Source Path is an absolute path beginning with '/'\" add-row-link=\"Add image source path\"></key-value-editor>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"multiple-image-source\" ng-if=\"sourceImages.length !== 1\">\n" +
    "<label for=\"imageSourceFrom\">Image Source From<span class=\"help action-inline\">\n" +
    "<a href>\n" +
    "<i class=\"pficon pficon-info\" style=\"cursor: help\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-original-title=\"This Build Config contains more then one Image Source. To edit them use the YAML editor.\">\n" +
    "</i>\n" +
    "</a>\n" +
    "</span></label>\n" +
    "<div ng-repeat=\"fromObject in imageSourceFromObjects\" class=\"imageSourceItem\">\n" +
    "{{selectTypes[fromObject.kind]}}: {{fromObject | imageObjectRef : buildConfig.metadata.namespace}}\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</dl>\n" +
    "</div>\n" +
    "<div ng-if=\"updatedBuildConfig | isJenkinsPipelineStrategy\" class=\"section\">\n" +
    "<h3>Jenkins Pipeline Configuration</h3>\n" +
    "<div class=\"form-group\" ng-if=\"buildConfig.spec.source.type === 'Git'\">\n" +
    "<label for=\"jenkinsfile-type\">Jenkinsfile Type</label>\n" +
    "<select id=\"jenkinsfile-type\" class=\"form-control\" ng-model=\"jenkinsfileOptions.type\" ng-options=\"type.id as type.title for type in jenkinsfileTypes\" aria-describedby=\"jenkinsfile-type-help\">\n" +
    "</select>\n" +
    "<div class=\"help-block\" id=\"jenkinsfile-type-help\">\n" +
    "Use a Jenkinsfile from the source repository or specify the Jenkinsfile content directly in the build configuration.\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"jenkinsfileOptions.type === 'path'\" class=\"form-group\">\n" +
    "<label for=\"jenkinsfilePath\">Jenkinsfile Source Path</label>\n" +
    "<input class=\"form-control\" id=\"jenkinsfilePath\" name=\"jenkinsfilePath\" type=\"text\" ng-model=\"updatedBuildConfig.spec.strategy.jenkinsPipelineStrategy.jenkinsfilePath\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck aria-describedby=\"jenkinsfile-path-help\">\n" +
    "<div class=\"help-block\" id=\"jenkinsfile-path-help\">\n" +
    "Optional path to the Jenkinsfile relative to the context dir. Defaults to the Jenkinsfile in context dir.\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"jenkinsfileOptions.type === 'inline'\">\n" +
    "<label>Jenkinsfile</label>\n" +
    "<div ui-ace=\"{\n" +
    "                              mode: 'groovy',\n" +
    "                              theme: 'eclipse',\n" +
    "                              onLoad: aceLoaded,\n" +
    "                              rendererOptions: {\n" +
    "                                fadeFoldWidgets: true,\n" +
    "                                showPrintMargin: false\n" +
    "                              }\n" +
    "                            }\" ng-model=\"updatedBuildConfig.spec.strategy.jenkinsPipelineStrategy.jenkinsfile\" class=\"ace-bordered ace-inline\"></div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"sources.none\">\n" +
    "<div class=\"form-group\">\n" +
    "<i>No source inputs have been defined for this build configuration.</i>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"updatedBuildConfig.spec.strategy.type !== 'JenkinsPipeline'\" class=\"section\">\n" +
    "<h3>Image Configuration</h3>\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<div>\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"buildFrom\">Build From</label>\n" +
    "<ui-select required ng-model=\"imageOptions.from.type\" search-enabled=\"false\">\n" +
    "<ui-select-match>{{$select.selected | startCase}}</ui-select-match>\n" +
    "<ui-select-choices repeat=\"type in buildFromTypes\">\n" +
    "{{type | startCase}}\n" +
    "</ui-select-choices>\n" +
    "</ui-select>\n" +
    "</div>\n" +
    "<div class=\"form-group\" ng-if=\"imageOptions.from.type==='ImageStreamTag'\">\n" +
    "<istag-select include-shared-namespace=\"true\" model=\"imageOptions.from.imageStreamTag\"></istag-select>\n" +
    "</div>\n" +
    "<div ng-if=\"imageOptions.from.type==='DockerImage'\" class=\"form-group\">\n" +
    "<label for=\"FromTypeLink\">Docker Image Repository</label>\n" +
    "<div>\n" +
    "<input class=\"form-control\" type=\"text\" ng-model=\"imageOptions.from.dockerImage\" autocorrect=\"off\" autocapitalize=\"off\" placeholder=\"example: centos/ruby-20-centos7:latest\" spellcheck required>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"imageOptions.from.type==='ImageStreamImage'\" class=\"form-group\">\n" +
    "<label for=\"FromTypeImage\">Image Stream Image</label>\n" +
    "<div>\n" +
    "<input class=\"form-control\" type=\"text\" ng-model=\"imageOptions.from.imageStreamImage\" placeholder=\"example: openshift/ruby-20-centos7@603bfa418\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck required>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<div class=\"checkbox\">\n" +
    "<label>\n" +
    "<input type=\"checkbox\" ng-model=\"options.forcePull\"/>\n" +
    "Always pull the builder image from the docker registry, even if it is present locally\n" +
    "</label>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div>\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"buildFrom\">Push To</label>\n" +
    "<ui-select required ng-model=\"imageOptions.to.type\" search-enabled=\"false\">\n" +
    "<ui-select-match>{{$select.selected | startCase}}</ui-select-match>\n" +
    "<ui-select-choices repeat=\"type in pushToTypes\">\n" +
    "{{type | startCase}}\n" +
    "</ui-select-choices>\n" +
    "</ui-select>\n" +
    "</div>\n" +
    "<div class=\"form-group\" ng-if=\"imageOptions.to.type==='ImageStreamTag'\">\n" +
    "<istag-select model=\"imageOptions.to.imageStreamTag\" allow-custom-tag=\"true\"></istag-select>\n" +
    "</div>\n" +
    "<div ng-if=\"imageOptions.to.type==='DockerImage'\" class=\"form-group\">\n" +
    "<label for=\"pushToLink\">Docker Image Repository</label>\n" +
    "<div>\n" +
    "<input class=\"form-control\" id=\"pushToLink\" name=\"pushToLink\" type=\"text\" ng-model=\"imageOptions.to.dockerImage\" placeholder=\"example: centos/ruby-20-centos7:latest\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck required>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</dl>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"col-lg-6\">\n" +
    "<div ng-if=\"!(updatedBuildConfig | isJenkinsPipelineStrategy)\" class=\"section\">\n" +
    "<h3>Environment Variables<span class=\"help action-inline\">\n" +
    "<a href>\n" +
    "<i class=\"pficon pficon-help\" data-toggle=\"tooltip\" aria-hidden=\"true\" data-original-title=\"Environment variables are used to configure and pass information to running containers.  These environment variables will be available during your build and at runtime.\"></i>\n" +
    "</a>\n" +
    "</span></h3>\n" +
    "<div>\n" +
    "<key-value-editor ng-if=\"envVars\" entries=\"envVars\" key-validator=\"[a-zA-Z][a-zA-Z0-9_]*\" key-validator-error-tooltip=\"A valid environment variable name is an alphanumeric (a-z and 0-9) string beginning with a letter that may contain underscores.\" add-row-link=\"Add environment variable\"></key-value-editor>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"sources.git || !(updatedBuildConfig | isJenkinsPipelineStrategy)\" class=\"section\">\n" +
    "<h3>Triggers\n" +
    "<a href=\"{{'build-triggers' | helpLink}}\" aria-hidden=\"true\" target=\"_blank\"><span class=\"learn-more-inline\">Learn more<i class=\"fa fa-external-link\"></i></span></a>\n" +
    "</h3>\n" +
    "<dl class=\"dl-horizontal left\">\n" +
    "<div>\n" +
    "<div ng-if=\"sources.git\">\n" +
    "<edit-webhook-triggers type=\"GitHub\" type-info=\"The GitHub source repository must be configured to use the webhook to trigger a build when source is committed.\" triggers=\"triggers.githubWebhooks\" form=\"form\" bc-name=\"buildConfig.metadata.name\" project-name=\"project.metadata.name\">\n" +
    "</edit-webhook-triggers>\n" +
    "<edit-webhook-triggers type=\"Generic\" type-info=\"A generic webhook can be triggered by any system capable of making a web request.\" triggers=\"triggers.genericWebhooks\" form=\"form\" bc-name=\"buildConfig.metadata.name\" project-name=\"project.metadata.name\">\n" +
    "</edit-webhook-triggers>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div ng-if=\"!(updatedBuildConfig | isJenkinsPipelineStrategy)\">\n" +
    "<h5>Image change</h5>\n" +
    "<div class=\"checkbox\">\n" +
    "<label>\n" +
    "<input type=\"checkbox\" ng-model=\"triggers.builderImageChangeTrigger.present\" ng-disabled=\"imageOptions.from.type === 'None'\"/>\n" +
    "Automatically build a new image when the builder image changes\n" +
    "<span class=\"help action-inline\">\n" +
    "<a href>\n" +
    "<i class=\"pficon pficon-help\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-original-title=\"Automatically building a new image when the builder image changes allows your code to always run on the latest updates.\">\n" +
    "</i>\n" +
    "</a>\n" +
    "</span>\n" +
    "</label>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</dl>\n" +
    "</div>\n" +
    "<div class=\"section\">\n" +
    "<h3>Run Policy\n" +
    "<span class=\"help action-inline\">\n" +
    "<a href>\n" +
    "<i class=\"pficon pficon-help\" data-toggle=\"tooltip\" aria-hidden=\"true\" data-original-title=\"The build run policy describes the order in which the builds created from the build configuration should run.\"></i>\n" +
    "</a>\n" +
    "</span>\n" +
    "</h3>\n" +
    "<div class=\"form-group\">\n" +
    "<label class=\"sr-only\">Run policy type</label>\n" +
    "<ui-select required ng-model=\"updatedBuildConfig.spec.runPolicy\" search-enabled=\"false\">\n" +
    "<ui-select-match>{{$select.selected | sentenceCase}}</ui-select-match>\n" +
    "<ui-select-choices repeat=\"type in runPolicyTypes\">\n" +
    "{{type | sentenceCase}}\n" +
    "</ui-select-choices>\n" +
    "</ui-select>\n" +
    "</div>\n" +
    "<div ng-switch=\"updatedBuildConfig.spec.runPolicy\">\n" +
    "<div ng-switch-when=\"Serial\">Builds triggered from this Build Configuration will run one at the time, in the order they have been triggered.</div>\n" +
    "<div ng-switch-when=\"Parallel\">Builds triggered from this Build Configuration will run all at the same time. The order in which they will finish is not guranteed.</div>\n" +
    "<div ng-switch-when=\"SerialLatestOnly\">Builds triggered from this Build Configuration will run one at the time. When a currently running build completes, the next build that will run is the latest build created. Other queued builds will be cancelled.</div>\n" +
    "<div ng-switch-default>Builds triggered from this Build Configuration will run using the {{updatedBuildConfig.spec.runPolicy | sentenceCase}} policy.</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"buttons gutter-top-bottom\">\n" +
    "<button type=\"submit\" class=\"btn btn-primary btn-lg\" ng-disabled=\"form.$invalid || form.$pristine || disableInputs\">\n" +
    "Save\n" +
    "</button>\n" +
    "<a class=\"btn btn-default btn-lg\" href=\"{{updatedBuildConfig | navigateResourceURL}}\">\n" +
    "Cancel\n" +
    "</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "</form>\n" +
    "</fieldset>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/edit/health-checks.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"middle surface-shaded\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container surface-shaded\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-show=\"!containers.length\" class=\"mar-top-md\">Loading...</div>\n" +
    "<form ng-show=\"containers.length\" name=\"form\">\n" +
    "<h1>Health Checks: {{name}}</h1>\n" +
    "<div class=\"help-block\">\n" +
    "Container health is periodically checked using readiness and liveness probes.\n" +
    "<div class=\"learn-more-block\">\n" +
    "<a href=\"{{'application_health' | helpLink}}\" target=\"_blank\">Learn more <i class=\"fa fa-external-link\" aria-hidden> </i></a>\n" +
    "</div>\n" +
    "</div>\n" +
    "<fieldset ng-disabled=\"disableInputs\">\n" +
    "<div ng-repeat=\"container in containers\">\n" +
    "<h2 ng-if=\"containers.length > 1\">Container {{container.name}}</h2>\n" +
    "<h3>Readiness Probe</h3>\n" +
    "<div class=\"help-block\" ng-if=\"$first\">\n" +
    "A readiness probe checks if the container is ready to handle requests. A failed readiness probe means that a container should not receive any traffic from a proxy, even if it's running.\n" +
    "</div>\n" +
    "<div ng-if=\"!container.readinessProbe\">\n" +
    "<a href=\"\" ng-click=\"addProbe(container, 'readinessProbe')\">Add Readiness Probe</a>\n" +
    "</div>\n" +
    "<div ng-if=\"container.readinessProbe\">\n" +
    "<edit-probe probe=\"container.readinessProbe\" exposed-ports=\"container.ports\" ng-if=\"container.readinessProbe\">\n" +
    "</edit-probe>\n" +
    "<p>\n" +
    "<a href=\"\" ng-click=\"removeProbe(container, 'readinessProbe')\">Remove Readiness Probe</a>\n" +
    "</p>\n" +
    "</div>\n" +
    "<h3>Liveness Probe</h3>\n" +
    "<div class=\"help-block\" ng-if=\"$first\">\n" +
    "A liveness probe checks if the container is still running. If the liveness probe fails, the container is killed.\n" +
    "</div>\n" +
    "<div ng-if=\"!container.livenessProbe\">\n" +
    "<a href=\"\" ng-click=\"addProbe(container, 'livenessProbe')\">Add Liveness Probe</a>\n" +
    "</div>\n" +
    "<div ng-if=\"container.livenessProbe\">\n" +
    "<edit-probe probe=\"container.livenessProbe\" exposed-ports=\"container.ports\">\n" +
    "</edit-probe>\n" +
    "<p>\n" +
    "<a href=\"\" ng-click=\"removeProbe(container, 'livenessProbe')\">Remove Liveness Probe</a>\n" +
    "</p>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"button-group gutter-top gutter-bottom\">\n" +
    "<button type=\"submit\" class=\"btn btn-primary btn-lg\" ng-click=\"save()\" ng-disabled=\"form.$invalid || form.$pristine || disableInputs\" value=\"\">Save</button>\n" +
    "<a class=\"btn btn-default btn-lg\" ng-href=\"{{resourceURL}}\">Cancel</a>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "</form>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/edit/project.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"middle surface-shaded\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container surface-shaded gutter-top\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<h1 style=\"margin-bottom: 5px\">Edit Project {{project.metadata.name}}</h1>\n" +
    "<div class=\"help-block mar-bottom-lg\">Update the display name and description of your project. The project's unique name cannot be modified.</div>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<form name=\"editProjectForm\">\n" +
    "<fieldset ng-disabled=\"disableInputs\">\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"displayName\">Display Name</label>\n" +
    "<input class=\"form-control input-lg\" name=\"displayName\" id=\"displayName\" placeholder=\"My Project\" type=\"text\" ng-model=\"editableFields.displayName\">\n" +
    "</div>\n" +
    "<div class=\"form-group\">\n" +
    "<label for=\"description\">Description</label>\n" +
    "<textarea class=\"form-control input-lg\" name=\"description\" id=\"description\" placeholder=\"A short description.\" ng-model=\"editableFields.description\"></textarea>\n" +
    "</div>\n" +
    "<div class=\"button-group\">\n" +
    "<button type=\"submit\" class=\"btn btn-primary btn-lg\" ng-click=\"update()\" ng-disabled=\"editProjectForm.$invalid || disableInputs\" value=\"\">Save</button>\n" +
    "<a class=\"btn btn-default btn-lg\" href=\"#\" back>Cancel</a>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "</form>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/edit/route.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"middle surface-shaded\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container surface-shaded\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-10 col-md-offset-1 gutter-top\">\n" +
    "<h1>Edit Route {{routeName}}</h1>\n" +
    "<div ng-if=\"loading\">\n" +
    "Loading...\n" +
    "</div>\n" +
    "<form name=\"form\">\n" +
    "<fieldset ng-disabled=\"disableInputs\" ng-if=\"!loading\">\n" +
    "<osc-routing model=\"routing\" services=\"services\" show-name-input=\"false\" host-read-only=\"true\">\n" +
    "</osc-routing>\n" +
    "<div class=\"button-group gutter-top gutter-bottom\">\n" +
    "<button type=\"submit\" class=\"btn btn-primary btn-lg\" ng-click=\"updateRoute()\" ng-disabled=\"form.$invalid || disableInputs\" value=\"\">Save</button>\n" +
    "<a class=\"btn btn-default btn-lg\" ng-href=\"{{routeURL}}\">Cancel</a>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "</form>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/edit/yaml.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"middle surface-shaded edit-yaml\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container surface-shaded\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"!resource\" class=\"pad-top-md\">Loading...</div>\n" +
    "<div ng-if=\"resource\" class=\"pad-top-md\">\n" +
    "<h1 class=\"truncate\">Edit <span class=\"hidden-xs\">{{resource.kind | humanizeKind : true}}</span> {{resource.metadata.name}}</h1>\n" +
    "<parse-error error=\"error\" ng-if=\"error\"></parse-error>\n" +
    "<div ng-if=\"resourceChanged && !resourceDeleted && !updatingNow\" class=\"alert alert-warning\">\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" aria-hidden=\"true\"></span>\n" +
    "<span class=\"sr-only\">Warning:</span>\n" +
    "{{resource.kind | humanizeKind | upperFirst}} <strong>{{resource.metadata.name}}</strong> has changed since you started editing it. You'll need to copy any changes you've made and edit the {{resource.kind | humanizeKind}} again.\n" +
    "</div>\n" +
    "<div ng-if=\"resourceDeleted\" class=\"alert alert-warning\">\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" aria-hidden=\"true\"></span>\n" +
    "<span class=\"sr-only\">Warning:</span>\n" +
    "{{resource.kind | humanizeKind | upperFirst}} <strong>{{resource.metadata.name}}</strong> has been deleted since you started editing it.\n" +
    "</div>\n" +
    "\n" +
    "<div ui-ace=\"{\n" +
    "                mode: 'yaml',\n" +
    "                theme: 'eclipse',\n" +
    "                onLoad: aceLoaded,\n" +
    "                rendererOptions: {\n" +
    "                  showPrintMargin: false\n" +
    "                }\n" +
    "              }\" ng-model=\"editor.model\" class=\"editor ace-bordered yaml-mode\"></div>\n" +
    "<div class=\"button-group mar-top-xl\">\n" +
    "<button class=\"btn btn-lg btn-primary\" type=\"button\" ng-click=\"save()\" ng-disabled=\"!modified || resourceChanged || resourceDeleted || updatingNow\">Save</button>\n" +
    "<button class=\"btn btn-lg btn-default\" type=\"button\" ng-disabled=\"updatingNow\" ng-click=\"cancel()\">Cancel</button>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/events.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<div class=\"page-header page-header-bleed-right page-header-bleed-left\">\n" +
    "<h1>Events</h1>\n" +
    "</div>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12 gutter-top\" ng-if=\"projectContext\">\n" +
    "<events project-context=\"projectContext\" ng-if=\"projectContext\"></events>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/images.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header header-light\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"page-header page-header-bleed-right page-header-bleed-left\">\n" +
    "<h1>Image Streams</h1>\n" +
    "</div>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"!renderOptions.showGetStarted\" class=\"data-toolbar\">\n" +
    "<div class=\"data-toolbar-filter\">\n" +
    "<project-filter></project-filter>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12 gutter-top\">\n" +
    "<table class=\"table table-bordered table-hover table-mobile\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Name</th>\n" +
    "<th>Docker Repo</th>\n" +
    "<th>Tags</th>\n" +
    "<th>Updated</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody ng-if=\"(imageStreams | hashSize) == 0\">\n" +
    "<tr><td colspan=\"4\"><em>{{emptyMessage}}</em></td></tr>\n" +
    "</tbody>\n" +
    "<tbody ng-repeat=\"imageStream in imageStreams | orderObjectsByDate : true\">\n" +
    "<tr>\n" +
    "<td data-title=\"Name\"><a href=\"{{imageStream | navigateResourceURL}}\">{{imageStream.metadata.name}}</a></td>\n" +
    "<td data-title=\"Docker Repo\">\n" +
    "<span ng-if=\"!imageStream.status.dockerImageRepository && !imageStream.spec.dockerImageRepository\"><em>unknown</em></span>\n" +
    "<span ng-if=\"imageStream.status.dockerImageRepository || imageStream.spec.dockerImageRepository\" class=\"word-break\">{{imageStream.status.dockerImageRepository || imageStream.spec.dockerImageRepository}}</span>\n" +
    "</td>\n" +
    "<td data-title=\"Tags\">\n" +
    "<span ng-if=\"!imageStream.status.tags.length\"><em>none</em></span>\n" +
    "<span ng-repeat=\"tag in imageStream.status.tags | limitTo: 4\">{{tag.tag}}<span ng-if=\"!$last\">,\n" +
    "</span></span><span ng-if=\"imageStream.status.tags.length === 5\">, {{imageStream.status.tags[4].tag}}</span><span ng-if=\"imageStream.status.tags.length > 5\">, and {{imageStream.status.tags.length - 4}} others</span>\n" +
    "</td>\n" +
    "<td data-title=\"Updated\"><relative-timestamp timestamp=\"imageStream | imageStreamLastUpdated\"></relative-timestamp></td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/logs/chromeless-build-log.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"wrap chromeless\">\n" +
    "\n" +
    "<div id=\"container-main\" class=\"middle\">\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\">\n" +
    "<log-viewer resource=\"builds/log\" name=\"build.metadata.name\" context=\"projectContext\" status=\"build.status.phase\" time-start=\"build.status.startTimestamp | date : 'short'\" time-end=\"build.status.completionTimestamp | date : 'short'\" chromeless=\"true\" run=\"logCanRun\" flex>\n" +
    "</log-viewer>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/logs/chromeless-deployment-log.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"wrap chromeless\">\n" +
    "\n" +
    "<div id=\"container-main\" class=\"middle\">\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\">\n" +
    "<log-viewer ng-if=\"deploymentConfigName && logOptions.version\" resource=\"deploymentconfigs/log\" name=\"deploymentConfigName\" context=\"projectContext\" options=\"logOptions\" chromeless=\"true\" run=\"logCanRun\" flex>\n" +
    "</log-viewer>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/logs/chromeless-pod-log.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"wrap chromeless\">\n" +
    "\n" +
    "<div id=\"container-main\" class=\"middle\">\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\">\n" +
    "<log-viewer resource=\"pods/log\" name=\"pod.metadata.name\" context=\"projectContext\" options=\"logOptions\" status=\"pod.status.phase\" time-start=\"pod.status.startTime | date : 'short'\" chromeless=\"true\" run=\"logCanRun\" flex>\n" +
    "</log-viewer>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/logs/textonly_log.html',
    " <log-viewer logs=\"logs\" loading=\"logsLoading\"></log-viewer>"
  );


  $templateCache.put('views/modals/confirm-replace.html',
    "<div class=\"modal-resource-action\">\n" +
    "<div class=\"modal-body\">\n" +
    "<div ng-if=\"resourceList.length === 1\">\n" +
    "<h1>{{resourceKind | humanizeKind}} '<strong>{{resourceName}}</strong>' already exists</h1>\n" +
    "<p>Do you want to replace with the new content?</p>\n" +
    "</div>\n" +
    "<div ng-if=\"resourceList.length > 1\">\n" +
    "<h1>Some items already exist:</h1>\n" +
    "<dl class=\"dl-horizontal\">\n" +
    "<dt ng-repeat-start=\"resource in updateResources\">{{resource.kind}}</dt>\n" +
    "<dd ng-repeat-end>{{resource.metadata.name}}</dd>\n" +
    "</dl>\n" +
    "<p>Do you want to replace the existing resources?</p>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "<button class=\"btn btn-lg btn-primary\" type=\"button\" ng-click=\"replace();\">Replace</button>\n" +
    "<button class=\"btn btn-lg btn-default\" type=\"button\" ng-click=\"cancel();\">Cancel</button>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/modals/confirm.html',
    "<div class=\"modal-resource-action\">\n" +
    "<div class=\"modal-body\">\n" +
    "<h1>{{message}}</h1>\n" +
    "<p ng-if=\"details\">{{details}}</p>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "<button class=\"btn btn-lg\" ng-class=\"okButtonClass\" type=\"button\" ng-click=\"confirm()\">{{okButtonText}}</button>\n" +
    "<button class=\"btn btn-lg btn-default\" type=\"button\" ng-click=\"cancel()\">{{cancelButtonText}}</button>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/modals/confirmScale.html',
    "<div class=\"modal-resource-action\">\n" +
    "<div class=\"modal-body\">\n" +
    "<h1>Scale down {{type}} <strong>{{resource | displayName}}</strong>?</h1>\n" +
    "<p>\n" +
    "Are you sure you want to scale <strong>{{resource | displayName}}</strong> to 0 replicas? This will stop all pods for the {{type}}.\n" +
    "</p>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "<button class=\"btn btn-lg btn-danger\" type=\"button\" ng-click=\"confirmScale()\">Scale Down</button>\n" +
    "<button class=\"btn btn-lg btn-default\" type=\"button\" ng-click=\"cancel()\">Cancel</button>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/modals/debug-terminal.html',
    "<div class=\"modal-debug-terminal\">\n" +
    "<div class=\"modal-header\">\n" +
    "<h2>Debug Container {{container.name}}</h2>\n" +
    "<small class=\"text-muted\">\n" +
    "{{debugPod.metadata.name}} &mdash;\n" +
    "<status-icon status=\"debugPod | podStatus\"></status-icon>\n" +
    "{{debugPod | podStatus | sentenceCase}}\n" +
    "</small>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "<div ng-if=\"!containerState.running\" class=\"empty-state-message text-center\">\n" +
    "\n" +
    "<h2 ng-if=\"debugPod.status.phase !== 'Failed'\" class=\"text-muted\">\n" +
    "Waiting for container {{container.name}} to start...\n" +
    "</h2>\n" +
    "\n" +
    "<div ng-if=\"debugPod.status.phase === 'Failed'\">\n" +
    "<h2>\n" +
    "<span class=\"pficon pficon-error-circle-o\" aria-hidden=\"true\"></span>\n" +
    "Could not start container {{container.name}}.\n" +
    "</h2>\n" +
    "<p>\n" +
    "An error occurred starting the debug pod.\n" +
    "<span ng-if=\"containerState.terminated.message\">{{containerState.terminated.message}}</span>\n" +
    "<span ng-if=\"containerState.terminated.exitCode\" class=\"text-muted\">Exit code: {{containerState.terminated.exitCode}}</span>\n" +
    "</p>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"containerState.running\">\n" +
    "<div class=\"help-block\">\n" +
    "This temporary pod has a modified entrypoint command to debug a failing container. The pod will be available for one hour and will be deleted when the terminal window is closed.\n" +
    "</div>\n" +
    "<div ng-if=\"container | entrypoint : image\" class=\"original-cmd-msg\">\n" +
    "<label>Original Command:</label>\n" +
    "<code>\n" +
    "<truncate-long-text content=\"container | entrypoint : image\" limit=\"80\" newline-limit=\"1\" expandable=\"false\" use-word-boundary=\"false\">\n" +
    "</truncate-long-text>\n" +
    "</code>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "<kubernetes-container-terminal pod=\"debugPod\" container=\"container.name\" autofocus command=\"[&quot;/bin/sh&quot;, &quot;-i&quot;, &quot;-c&quot;, &quot;TERM=xterm /bin/sh&quot;]\">\n" +
    "</kubernetes-container-terminal>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "<button class=\"btn btn-lg btn-primary\" type=\"button\" ng-click=\"close()\">Close</button>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/modals/delete-project.html',
    "<div class=\"modal-project-delete\">\n" +
    "<div class=\"modal-body\">\n" +
    "<h1>Are you sure you want to delete the project '<strong>{{project | displayName}}</strong>'?</h1>\n" +
    "<p>This will <strong>delete all resources</strong> associated with the project {{project | displayName}} and <strong>cannot be undone</strong>. Make sure this is something you really want to do!</p>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "<button class=\"btn btn-lg btn-danger\" type=\"button\" ng-click=\"delete();\">Delete this project</button>\n" +
    "<button class=\"btn btn-lg btn-default\" type=\"button\" ng-click=\"cancel();\">Cancel</button>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/modals/delete-resource.html',
    "<div class=\"modal-resource-action\">\n" +
    "\n" +
    "<form>\n" +
    "<div class=\"modal-body\">\n" +
    "<h1>Are you sure you want to delete the {{typeDisplayName || (kind | humanizeKind)}} '<strong>{{displayName ? displayName : resourceName}}</strong>'?</h1>\n" +
    "<div ng-if=\"replicas\" class=\"alert alert-warning\">\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" aria-hidden=\"true\"></span>\n" +
    "<span class=\"sr-only\">Warning:</span>\n" +
    "<strong>{{resourceName}}</strong> has running pods. Deleting the {{typeDisplayName || (kind | humanizeKind)}} will <strong>not</strong> delete the pods it controls. Consider scaling the {{typeDisplayName || (kind | humanizeKind)}} down to 0 before continuing.\n" +
    "</div>\n" +
    "<p>This<span ng-if=\"isProject\"> will <strong>delete all resources</strong> associated with the project {{displayName ? displayName : resourceName}} and</span> <strong>cannot be undone</strong>. Make sure this is something you really want to do!</p>\n" +
    "<div ng-show=\"typeNameToConfirm\">\n" +
    "<p>Type the name of the {{typeDisplayName || (kind | humanizeKind)}} to confirm.</p>\n" +
    "<p>\n" +
    "<label class=\"sr-only\" for=\"resource-to-delete\">{{typeDisplayName || (kind | humanizeKind)}} to delete</label>\n" +
    "<input ng-model=\"confirmName\" id=\"resource-to-delete\" type=\"text\" class=\"form-control input-lg\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck autofocus>\n" +
    "</p>\n" +
    "</div>\n" +
    "<div ng-switch=\"kind\">\n" +
    "<div ng-switch-when=\"Deployment\">\n" +
    "<strong>Note:</strong> None of the replica sets created by this deployment will be deleted. To delete the deployment and all of its replica sets, you can run the command\n" +
    "<pre class=\"code prettyprint mar-top-md\">oc delete deployment {{resourceName}} -n {{projectName}}</pre>\n" +
    "Learn more about the <a href=\"command-line\">command line tools</a>.\n" +
    "</div>\n" +
    "<div ng-switch-when=\"DeploymentConfig\">\n" +
    "<strong>Note:</strong> None of the deployments created by this deployment config will be deleted. To delete the deployment config and all of its deployments, you can run the command\n" +
    "<pre class=\"code prettyprint mar-top-md\">oc delete dc {{resourceName}} -n {{projectName}}</pre>\n" +
    "Learn more about the <a href=\"command-line\">command line tools</a>.\n" +
    "</div>\n" +
    "<div ng-switch-when=\"BuildConfig\">\n" +
    "<strong>Note:</strong> None of the builds created by this build config will be deleted. To delete the build config and all of its builds, you can run the command\n" +
    "<pre class=\"code prettyprint mar-top-md\">oc delete bc {{resourceName}} -n {{projectName}}</pre>\n" +
    "Learn more about the <a href=\"command-line\">command line tools</a>.\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"hpaList.length > 0\">\n" +
    "<p>\n" +
    "<span ng-if=\"hpaList.length === 1\">\n" +
    "This resource has an autoscaler associated with it. It is recommended you delete the autoscaler with the resource it scales.\n" +
    "</span>\n" +
    "<span ng-if=\"hpaList.length > 1\">\n" +
    "This resource has autoscalers associated with it. It is recommended you delete the autoscalers with the resource they scale.\n" +
    "</span>\n" +
    "</p>\n" +
    "<label>\n" +
    "<input type=\"checkbox\" ng-model=\"options.deleteHPAs\">\n" +
    "Delete\n" +
    "<span ng-if=\"hpaList.length === 1\">\n" +
    "Horizontal Pod Autoscaler '<strong>{{hpaList[0].metadata.name}}</strong>'\n" +
    "</span>\n" +
    "<span ng-if=\"hpaList.length > 1\">\n" +
    "{{hpaList.length}} associated Horizontal Pod Autoscalers\n" +
    "</span>\n" +
    "</label>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "<button ng-disabled=\"typeNameToConfirm && confirmName !== resourceName && confirmName !== displayName\" class=\"btn btn-lg btn-danger\" type=\"submit\" ng-click=\"delete();\">Delete</button>\n" +
    "<button class=\"btn btn-lg btn-default\" type=\"button\" ng-click=\"cancel();\">Cancel</button>\n" +
    "</div>\n" +
    "</form>\n" +
    "</div>"
  );


  $templateCache.put('views/modals/link-service.html',
    "<div class=\"modal-resource-action\">\n" +
    "<div class=\"modal-body\">\n" +
    "<h4>Group Service to {{service.metadata.name}}</h4>\n" +
    "<div class=\"help-block mar-bottom-md\">\n" +
    "Choose a service that <strong>{{service.metadata.name}}</strong> uses. This groups the services together in the overview.\n" +
    "</div>\n" +
    "<form>\n" +
    "<label class=\"sr-only\" for=\"childService\">Service:</label>\n" +
    "<ui-select ng-model=\"link.selectedService\" autofocus theme=\"bootstrap\" title=\"Choose a service\">\n" +
    "<ui-select-match placeholder=\"Choose a service...\">{{$select.selected.metadata.name}}</ui-select-match>\n" +
    "<ui-select-choices repeat=\"service in options | toArray | filter : { metadata: { name: $select.search } } | orderBy : 'metadata.name'\">\n" +
    "<div ng-bind-html=\"service.metadata.name | highlight : $select.search\"></div>\n" +
    "</ui-select-choices>\n" +
    "</ui-select>\n" +
    "</form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "<button class=\"btn btn-lg btn-primary\" type=\"button\" ng-click=\"link()\" ng-disabled=\"!link.selectedService\">OK</button>\n" +
    "<button class=\"btn btn-lg btn-default\" type=\"button\" ng-click=\"cancel()\">Cancel</button>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/modals/process-template.html',
    "<div class=\"modal-resource-action\">\n" +
    "<div class=\"modal-body\">\n" +
    "<h1>Add Template</h1>\n" +
    "<p>What would you like to do?</p>\n" +
    "<div>\n" +
    "<label>\n" +
    "<input type=\"checkbox\" ng-model=\"templateOptions.process\"/>\n" +
    "<strong>Process the template</strong>\n" +
    "</label>\n" +
    "<span id=\"helpBlock\" class=\"help-block\">Create the objects defined in the template. You will have an opportunity to fill in template parameters.</span>\n" +
    "</div>\n" +
    "<div>\n" +
    "<label>\n" +
    "<input type=\"checkbox\" ng-model=\"templateOptions.add\"/>\n" +
    "<strong>Save template</strong>\n" +
    "</label>\n" +
    "<span id=\"helpBlock\" class=\"help-block\">Save the template to the project. This will make the template available to anyone who can view the project.</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "<button class=\"btn btn-lg btn-primary\" type=\"button\" ng-click=\"continue();\" ng-disabled=\"!templateOptions.process && !templateOptions.add\">Continue</button>\n" +
    "<button class=\"btn btn-lg btn-default\" type=\"button\" ng-click=\"cancel();\">Cancel</button>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/monitoring.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section monitoring-page\" ng-class=\"{ 'sidebar-open': !renderOptions.collapseEventsSidebar }\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header header-light\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"page-header page-header-bleed-right page-header-bleed-left\">\n" +
    "<h1>\n" +
    "Monitoring\n" +
    "<events-badge project-context=\"projectContext\" ng-if=\"projectContext\" class=\"pull-right\" sidebar-collapsed=\"renderOptions.collapseEventsSidebar\"></events-badge>\n" +
    "</h1>\n" +
    "</div>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div class=\"data-toolbar\">\n" +
    "<ui-select class=\"data-toolbar-dropdown\" ng-model=\"kindSelector.selected\" theme=\"bootstrap\" search-enabled=\"true\" ng-disabled=\"kindSelector.disabled\" title=\"Choose a resource\">\n" +
    "<ui-select-match placeholder=\"Choose a resource\">{{$select.selected.label ? $select.selected.label : ($select.selected.kind | humanizeKind : true)}}</ui-select-match>\n" +
    "<ui-select-choices repeat=\"kind in kinds | filter : {kind: $select.search} : matchKind | orderBy : 'kind'\">\n" +
    "<div ng-bind-html=\"(kind.label ? kind.label : (kind.kind | humanizeKind : true)) | highlight: $select.search\"></div>\n" +
    "</ui-select-choices>\n" +
    "</ui-select>\n" +
    "<div class=\"vertical-divider\"></div>\n" +
    "<div class=\"data-toolbar-filter\">\n" +
    "<div class=\"form-group filter-controls\">\n" +
    "<label for=\"events-filter\" class=\"sr-only\">Filter by name</label>\n" +
    "<input type=\"search\" placeholder=\"Filter by name\" class=\"form-control\" id=\"events-filter\" ng-model=\"filters.text\">\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"checkbox nowrap\">\n" +
    "<label>\n" +
    "<input type=\"checkbox\" ng-model=\"filters.hideOlderResources\">Hide older resources\n" +
    "</label>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<div ng-if=\"kindSelector.selected.kind === 'All' || kindSelector.selected.kind === 'Builds'\">\n" +
    "<h2>Builds</h2>\n" +
    "<div class=\"list-view-pf\">\n" +
    "<div class=\"list-group-item\" ng-if=\"!(filteredBuilds | hashSize)\">\n" +
    "<div class=\"list-view-pf-main-info\">\n" +
    "<ellipsis-pulser color=\"dark\" size=\"sm\" msg=\"Loading builds\" ng-if=\"!buildsLoaded\"></ellipsis-pulser>\n" +
    "<em>\n" +
    "<div ng-if=\"(builds | hashSize) > 0\">The current filters are hiding all builds.</div>\n" +
    "<span ng-if=\"buildsLoaded && (builds | hashSize) === 0\">There are no builds in this project.</span>\n" +
    "</em>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"list-group-item list-group-item-expandable\" ng-repeat-start=\"build in filteredBuilds track by (build | uid)\" ng-click=\"toggleItem($event, this, build)\" ng-class=\"{'expanded': expanded.builds[build.metadata.name]}\">\n" +
    "<div class=\"list-view-pf-checkbox\">\n" +
    "<button class=\"sr-only\">{{expanded.builds[build.metadata.name] ? 'Collapse' : 'Expand'}}</button>\n" +
    "<span ng-if=\"expanded.builds[build.metadata.name]\">\n" +
    "<span class=\"fa fa-angle-down\"></span>\n" +
    "</span>\n" +
    "<span ng-if=\"!expanded.builds[build.metadata.name]\">\n" +
    "<span class=\"fa fa-angle-right\"></span>\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class=\"list-view-pf-main-info\">\n" +
    "<div class=\"list-view-pf-body\">\n" +
    "<div class=\"list-view-pf-description\">\n" +
    "<div class=\"list-group-item-heading\">\n" +
    "<a ng-href=\"{{build | navigateResourceURL}}\">{{build.metadata.name}}</a>\n" +
    "<small>created <relative-timestamp timestamp=\"build.metadata.creationTimestamp\"></relative-timestamp></small>\n" +
    "</div>\n" +
    "<div class=\"list-group-item-text\">\n" +
    "<build-status build=\"build\"></build-status>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"list-view-pf-additional-info\">\n" +
    "<div class=\"list-view-pf-additional-info-item\">\n" +
    "<span ng-if=\"build.spec.source.type || build.spec.revision.git.commit || build.spec.source.git.uri\">\n" +
    "<span class=\"fa fa-fw fa-code\"></span>\n" +
    "<span ng-if=\"build.spec.revision.git.commit\">\n" +
    "{{build.spec.revision.git.message}}\n" +
    "<osc-git-link class=\"hash\" uri=\"build.spec.source.git.uri\" ref=\"build.spec.revision.git.commit\">{{build.spec.revision.git.commit | limitTo:7}}</osc-git-link>\n" +
    "<span ng-if=\"detailed && build.spec.revision.git.author\">\n" +
    "authored by {{build.spec.revision.git.author.name}}\n" +
    "</span>\n" +
    "</span>\n" +
    "<span ng-if=\"!build.spec.revision.git.commit && build.spec.source.git.uri\">\n" +
    "<osc-git-link uri=\"build.spec.source.git.uri\">{{build.spec.source.git.uri}}</osc-git-link>\n" +
    "</span>\n" +
    "<span ng-if=\"build.spec.source.type && !build.spec.source.git\">\n" +
    "Source: {{build.spec.source.type}}\n" +
    "</span>\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-repeat-end ng-if=\"expanded.builds[build.metadata.name]\" class=\"list-group-expanded-section\" ng-class=\"{'expanded': expanded.builds[build.metadata.name]}\">\n" +
    "\n" +
    "<log-viewer ng-if=\"'builds/log' | canI : 'get'\" resource=\"builds/log\" name=\"build.metadata.name\" context=\"projectContext\" options=\"logOptions.builds[build.metadata.name]\" empty=\"logEmpty.builds[build.metadata.name]\" run=\"logCanRun.builds[build.metadata.name]\" fixed-height=\"250\" full-log-url=\"(build | navigateResourceURL) + '?view=chromeless'\">\n" +
    "<div ng-if=\"build.status.startTimestamp && !logEmpty.builds[build.metadata.name]\" class=\"log-timestamps\" style=\"margin-left: 0\">\n" +
    "Log from {{build.status.startTimestamp | date : 'short'}}\n" +
    "<span ng-if=\"build.status.completionTimestamp\">\n" +
    "to {{build.status.completionTimestamp | date : 'short'}}\n" +
    "</span>\n" +
    "</div>\n" +
    "</log-viewer>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"kindSelector.selected.kind === 'All' || kindSelector.selected.kind === 'ReplicationControllers'\">\n" +
    "<h2>Deployments</h2>\n" +
    "<div class=\"list-view-pf\">\n" +
    "<div class=\"list-group-item\" ng-if=\"!(filteredDeployments | hashSize)\">\n" +
    "<div class=\"list-view-pf-main-info\">\n" +
    "<ellipsis-pulser color=\"dark\" size=\"sm\" msg=\"Loading deployments\" ng-if=\"!deploymentsLoaded\"></ellipsis-pulser>\n" +
    "<em>\n" +
    "<div ng-if=\"(deployments | hashSize) > 0\">The current filters are hiding all deployments.</div>\n" +
    "<span ng-if=\"deploymentsLoaded && (deployments | hashSize) === 0\">There are no deployments in this project.</span>\n" +
    "</em>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"list-group-item list-group-item-expandable\" ng-repeat-start=\"deployment in filteredDeployments track by (deployment | uid)\" ng-click=\"toggleItem($event, this, deployment)\" ng-class=\"{'expanded': expanded.deployments[deployment.metadata.name]}\">\n" +
    "<div class=\"list-view-pf-checkbox\">\n" +
    "<button class=\"sr-only\">{{expanded.deployments[deployment.metadata.name] ? 'Collapse' : 'Expand'}}</button>\n" +
    "<span ng-if=\"expanded.deployments[deployment.metadata.name]\">\n" +
    "<span class=\"fa fa-angle-down\"></span>\n" +
    "</span>\n" +
    "<span ng-if=\"!expanded.deployments[deployment.metadata.name]\">\n" +
    "<span class=\"fa fa-angle-right\"></span>\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class=\"list-view-pf-main-info\">\n" +
    "<div class=\"list-view-pf-body\">\n" +
    "<div class=\"list-view-pf-description\">\n" +
    "<div class=\"list-group-item-heading\">\n" +
    "<a ng-href=\"{{deployment | navigateResourceURL}}\">{{deployment.metadata.name}}</a>\n" +
    "<small>created <relative-timestamp timestamp=\"deployment.metadata.creationTimestamp\"></relative-timestamp></small>\n" +
    "</div>\n" +
    "<div class=\"list-group-item-text\">\n" +
    "<status-icon status=\"deployment | deploymentStatus\" disable-animation fixed-width=\"true\"></status-icon>\n" +
    "{{deployment | deploymentStatus | sentenceCase}}<span ng-if=\"(deployment | deploymentStatus) === 'Active'\">, {{deployment.status.replicas}} replica<span ng-if=\"deployment.status.replicas !== 1\">s</span></span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"list-view-pf-additional-info\">\n" +
    "<div class=\"list-view-pf-additional-info-item\">\n" +
    "<span class=\"pficon fa-fw pficon-image\"></span>\n" +
    "<image-names pod-template=\"deployment.spec.template\" pods=\"podsByDeployment[deployment.metadata.name]\">\n" +
    "</image-names>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-repeat-end ng-if=\"expanded.deployments[deployment.metadata.name]\" class=\"list-group-expanded-section\" ng-class=\"{'expanded': expanded.deployments[deployment.metadata.name]}\">\n" +
    "\n" +
    "<log-viewer ng-if=\"'deploymentconfigs/log' | canI : 'get'\" resource=\"deploymentconfigs/log\" name=\"deployment | annotation : 'deploymentConfig'\" context=\"projectContext\" options=\"logOptions.deployments[deployment.metadata.name]\" empty=\"logEmpty.deployments[deployment.metadata.name]\" run=\"logCanRun.deployments[deployment.metadata.name]\" fixed-height=\"250\" full-log-url=\"(deployment | navigateResourceURL) + '?view=chromeless'\">\n" +
    "</log-viewer>\n" +
    "<div class=\"mar-top-lg\" ng-if=\"metricsAvailable\">\n" +
    "<deployment-metrics pods=\"podsByDeployment[deployment.metadata.name]\" containers=\"deployment.spec.template.spec.containers\">\n" +
    "</deployment-metrics>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"kindSelector.selected.kind === 'All' || kindSelector.selected.kind === 'Pods'\">\n" +
    "<h2>Pods</h2>\n" +
    "<div class=\"list-view-pf\">\n" +
    "<div class=\"list-group-item\" ng-if=\"!(filteredPods | hashSize)\">\n" +
    "<div class=\"list-view-pf-main-info\">\n" +
    "<ellipsis-pulser color=\"dark\" size=\"sm\" msg=\"Loading pods\" ng-if=\"!podsLoaded\"></ellipsis-pulser>\n" +
    "<em>\n" +
    "<div ng-if=\"(pods | hashSize) > 0\">The current filters are hiding all pods.</div>\n" +
    "<span ng-if=\"podsLoaded && (pods | hashSize) === 0\">There are no pods in this project.</span>\n" +
    "</em>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"list-group-item list-group-item-expandable\" ng-repeat-start=\"pod in filteredPods track by (pod | uid)\" ng-click=\"toggleItem($event, this, pod)\" ng-class=\"{'expanded': expanded.pods[pod.metadata.name]}\">\n" +
    "<div class=\"list-view-pf-checkbox\">\n" +
    "<button class=\"sr-only\">{{expanded.pods[pod.metadata.name] ? 'Collapse' : 'Expand'}}</button>\n" +
    "<span ng-if=\"expanded.pods[pod.metadata.name]\">\n" +
    "<span class=\"fa fa-angle-down\"></span>\n" +
    "</span>\n" +
    "<span ng-if=\"!expanded.pods[pod.metadata.name]\">\n" +
    "<span class=\"fa fa-angle-right\"></span>\n" +
    "</span>\n" +
    "</div>\n" +
    "<div class=\"list-view-pf-main-info\">\n" +
    "<div class=\"list-view-pf-body\">\n" +
    "<div class=\"list-view-pf-description\">\n" +
    "<div class=\"list-group-item-heading\">\n" +
    "<a ng-href=\"{{pod | navigateResourceURL}}\">{{pod.metadata.name}}</a>\n" +
    "<span ng-if=\"pod | isTroubledPod\">\n" +
    "<pod-warnings pod=\"pod\"></pod-warnings>\n" +
    "</span>\n" +
    "<small>created <relative-timestamp timestamp=\"pod.metadata.creationTimestamp\"></relative-timestamp></small>\n" +
    "</div>\n" +
    "<div class=\"list-group-item-text\">\n" +
    "<status-icon status=\"pod | podStatus\" disable-animation fixed-width=\"true\"></status-icon>\n" +
    "{{pod | podStatus | sentenceCase}}\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"list-view-pf-additional-info\">\n" +
    "<div class=\"list-view-pf-additional-info-item\">\n" +
    "<span class=\"pficon fa-fw pficon-image\"></span>\n" +
    "<image-names pod-template=\"pod\" pods=\"[pod]\"></image-names>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-repeat-end ng-if=\"expanded.pods[pod.metadata.name]\" class=\"list-group-expanded-section\" ng-class=\"{'expanded': expanded.pods[pod.metadata.name]}\">\n" +
    "<log-viewer ng-if=\"'pods/log' | canI : 'get'\" resource=\"pods/log\" name=\"pod.metadata.name\" context=\"projectContext\" options=\"logOptions.pods[pod.metadata.name]\" empty=\"logEmpty.pods[pod.metadata.name]\" run=\"logCanRun.pods[pod.metadata.name]\" fixed-height=\"250\" full-log-url=\"(pod | navigateResourceURL) + '?view=chromeless'\">\n" +
    "<label for=\"selectLogContainer\">Container:</label>\n" +
    "<span ng-if=\"pod.spec.containers.length === 1\">\n" +
    "{{pod.spec.containers[0].name}}\n" +
    "</span>\n" +
    "<select id=\"selectLogContainer\" ng-if=\"pod.spec.containers.length > 1\" ng-model=\"logOptions.pods[pod.metadata.name].container\" ng-options=\"container.name as container.name for container in pod.spec.containers\" ng-init=\"logOptions.pods[pod.metadata.name].container = pod.spec.containers[0].name\">\n" +
    "</select>\n" +
    "<span ng-if=\"containerStateReason || containerStatusKey\">\n" +
    "<span class=\"dash\">&mdash;</span>\n" +
    "<status-icon status=\"containerStateReason || (containerStatusKey | capitalize)\"></status-icon>\n" +
    "<span>{{containerStateReason || containerStatusKey | sentenceCase}}</span>\n" +
    "</span>\n" +
    "<span ng-if=\"containerStartTime && !logEmpty.pods[pod.metadata.name]\">\n" +
    "<span class=\"log-timestamps\">Log from {{containerStartTime | date : 'short'}} <span ng-if=\"containerEndTime\">to {{containerEndTime | date : 'short'}}</span></span>\n" +
    "</span>\n" +
    "</log-viewer>\n" +
    "\n" +
    "<div class=\"mar-top-lg\" ng-if=\"metricsAvailable\">\n" +
    "<pod-metrics pod=\"pod\"></pod-metrics>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/newfromtemplate.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"middle surface-shaded\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container surface-shaded\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<div class=\"osc-form\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-2 template-name gutter-top hidden-sm hidden-xs\">\n" +
    "<span class=\"fa fa-cubes\"></span>\n" +
    "</div>\n" +
    "<div class=\"col-md-9\">\n" +
    "<fieldset ng-disabled=\"disableInputs\">\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<osc-image-summary resource=\"template\"></osc-image-summary>\n" +
    "<div ng-if=\"templateImages.length\" class=\"images\">\n" +
    "<h2>Images</h2>\n" +
    "<ul class=\"list-unstyled\" ng-repeat=\"image in templateImages\">\n" +
    "<li>\n" +
    "<i class=\"pficon pficon-image\" aria-hidden=\"true\"></i>\n" +
    "<span class=\"name\">{{ image.name }}</span>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "<form name=\"templateForm\">\n" +
    "<template-options parameters=\"template.parameters\" expand=\"true\" can-toggle=\"false\"></template-options>\n" +
    "<label-editor labels=\"labels\" system-labels=\"systemLabels\" expand=\"true\" can-toggle=\"false\" help-text=\"Each label is applied to each created resource.\">\n" +
    "</label-editor>\n" +
    "<div class=\"buttons gutter-top-bottom\">\n" +
    "<button class=\"btn btn-primary btn-lg\" ng-click=\"createFromTemplate()\" ng-disabled=\"templateForm.$invalid || disableInputs\">Create</button>\n" +
    "<a class=\"btn btn-default btn-lg\" href=\"{{projectName | projectOverviewURL}}\">Cancel</a>\n" +
    "</div>\n" +
    "</form>\n" +
    "</fieldset>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-hide=\"template\">\n" +
    "{{ emptyMessage }}\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/other-resources.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header header-light\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"page-header page-header-bleed-right page-header-bleed-left\">\n" +
    "<h1>Other Resources</h1>\n" +
    "</div>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div class=\"data-toolbar other-resources-toolbar\">\n" +
    "<ui-select class=\"data-toolbar-dropdown\" ng-model=\"kindSelector.selected\" theme=\"bootstrap\" search-enabled=\"true\" ng-disabled=\"kindSelector.disabled\" title=\"Choose a resource\">\n" +
    "<ui-select-match placeholder=\"Choose a resource to list...\">{{$select.selected.kind | humanizeKind : true}}</ui-select-match>\n" +
    "<ui-select-choices repeat=\"kind in kinds | filter : {kind: $select.search} : matchKind | orderBy : 'kind'\">\n" +
    "<div ng-bind-html=\"(kind.kind | humanizeKind : true) | highlight: $select.search\"></div>\n" +
    "</ui-select-choices>\n" +
    "</ui-select>\n" +
    "<div class=\"vertical-divider\"></div>\n" +
    "<div class=\"data-toolbar-filter\">\n" +
    "<project-filter></project-filter>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12 gutter-top\">\n" +
    "<table class=\"table table-bordered table-mobile\" ng-class=\"{ 'table-empty': (resources | hashSize) === 0 }\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Name</th>\n" +
    "<th>Created</th>\n" +
    "<th>Labels</th>\n" +
    "<th><span class=\"sr-only\">Actions</span></th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody ng-if=\"(resources | hashSize) == 0\">\n" +
    "<tr><td colspan=\"4\"><em>{{emptyMessage}}</em></td></tr>\n" +
    "</tbody>\n" +
    "<tbody ng-repeat=\"resource in resources | orderObjectsByDate : true\">\n" +
    "<tr>\n" +
    "<td data-title=\"Name\">{{resource.metadata.name}}</td>\n" +
    "<td data-title=\"Created\"><relative-timestamp timestamp=\"resource.metadata.creationTimestamp\"></relative-timestamp></td>\n" +
    "<td data-title=\"Labels\">\n" +
    "<em ng-if=\"(resource.metadata.labels | hashSize) === 0\">none</em>\n" +
    "<labels labels=\"resource.metadata.labels\" clickable=\"true\" kind=\"{{kindSelector.selected.kind | kindToResource : true }}\" project-name=\"{{resource.metadata.namespace}}\" limit=\"3\" filter-current-page=\"true\"></labels></td>\n" +
    "<td data-title=\"Actions\" class=\"text-xs-left text-right\">\n" +
    "<span uib-dropdown ng-hide=\"!(selectedResource | canI : 'update') && !(selectedResource | canI : 'delete')\">\n" +
    "<button type=\"button\" class=\"dropdown-toggle btn btn-default\" data-toggle=\"dropdown\">\n" +
    "Actions\n" +
    "<span class=\"caret\"></span>\n" +
    "</button>\n" +
    "<ul class=\"uib-dropdown-menu dropdown-menu-right\" aria-labelledby=\"{{resource.metadata.name}}_actions\">\n" +
    "<li ng-if=\"selectedResource | canI : 'update'\">\n" +
    "<a ng-href=\"{{resource | editYamlURL : getReturnURL()}}\" role=\"button\">Edit YAML</a>\n" +
    "</li>\n" +
    "<li ng-if=\"selectedResource | canI : 'delete'\">\n" +
    "<delete-link kind=\"{{kindSelector.selected.kind}}\" group=\"{{kindSelector.selected.group}}\" resource-name=\"{{resource.metadata.name}}\" project-name=\"{{resource.metadata.namespace}}\" alerts=\"alerts\" stay-on-current-page=\"true\" success=\"loadKind\">\n" +
    "</delete-link>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</span>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/overview.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page class=\"overview\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content surface-shaded\" in-view-container>\n" +
    "<div class=\"container-fluid surface-shaded\">\n" +
    "<tasks></tasks>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\">\n" +
    "\n" +
    "<div ng-if=\"renderOptions.showGetStarted\">\n" +
    "\n" +
    "<div class=\"empty-project text-center\">\n" +
    "<div ng-if=\"project.metadata.name | canIAddToProject\">\n" +
    "<h2>Get started with your project.</h2>\n" +
    "<p class=\"gutter-top\">\n" +
    "Use your source or an example repository to build an application image, or add components like databases and message queues.\n" +
    "</p>\n" +
    "<p class=\"gutter-top\">\n" +
    "<a ng-href=\"project/{{projectName}}/create\" class=\"btn btn-lg btn-primary\">\n" +
    "Add to Project\n" +
    "</a>\n" +
    "</p>\n" +
    "</div>\n" +
    "<div ng-if=\"!(project.metadata.name | canIAddToProject)\">\n" +
    "<h2>Welcome to project {{projectName}}.</h2>\n" +
    "<ng-include src=\"'views/_request-access.html'\"></ng-include>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"renderOptions.showLoading\" class=\"loading-message\">\n" +
    "Loading...\n" +
    "</div>\n" +
    "<div class=\"service-group-with-route-row\" ng-repeat=\"service in topLevelServices\" ng-if=\"service.metadata.labels.app || routesByService[service.metadata.name].length || childServicesByParent[service.metadata.name].length\">\n" +
    "<overview-service-group></overview-service-group>\n" +
    "</div>\n" +
    "<div row wrap class=\"standalone-service-row\">\n" +
    "<div ng-repeat=\"service in topLevelServices\" ng-if=\"!service.metadata.labels.app && !routesByService[service.metadata.name].length && !childServicesByParent[service.metadata.name].length\" class=\"standalone-service\">\n" +
    "<overview-service-group></overview-service-group>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div row wrap ng-if=\"(monopodsByService[''] | hashSize) || (deploymentConfigsByService[''] | hashSize) || (deploymentsByService[''] | hashSize) || (replicaSetsByService[''] | hashSize)\" class=\"unserviced-row\">\n" +
    "\n" +
    "<div ng-repeat=\"(dcName, deploymentConfig) in deploymentConfigsByService[''] track by (deploymentConfig | uid)\" class=\"no-service\" ng-if=\"deployments = visibleDeploymentsByConfigAndService[''][dcName]\"> \n" +
    "<overview-deployment-config class=\"deployment-tile-wrapper\"></overview-deployment-config>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div ng-repeat=\"deployment in deploymentsByService[''] | orderObjectsByDate : true track by (deployment | uid)\" ng-if=\"!(deployment | annotation : 'deploymentConfig') || !deploymentConfigs[(deployment | annotation : 'deploymentConfig')]\" class=\"no-service\">\n" +
    "<overview-replication-controller class=\"deployment-tile-wrapper\"></overview-replication-controller>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div ng-repeat=\"deployment in replicaSetsByService[''] | orderObjectsByDate : true track by (deployment | uid)\" class=\"no-service\">\n" +
    "<overview-replication-controller class=\"deployment-tile-wrapper\"></overview-replication-controller>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div ng-repeat=\"pod in monopodsByService[''] | orderObjectsByDate : true track by (pod | uid)\" class=\"no-service\">\n" +
    "<overview-pod class=\"deployment-tile-wrapper\"></overview-pod>\n" +
    "</div>\n" +
    "\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/overview/_dc.html',
    "<div class=\"deployment-tile\" ng-class=\"{ 'deployment-in-progress': inProgressDeployment }\">\n" +
    "<ng-include src=\"'views/overview/_service-header.html'\"></ng-include>\n" +
    "<div class=\"deployment-header\">\n" +
    "<div class=\"rc-header\">\n" +
    "<div>\n" +
    "Deployment\n" +
    "<a ng-href=\"{{deploymentConfig | navigateResourceURL}}\">{{dcName}}</a>\n" +
    "<small class=\"overview-timestamp\" ng-if=\"activeDeployment && !inProgressDeployment\">\n" +
    "<span class=\"hidden-xs\">&ndash;</span>\n" +
    "<relative-timestamp timestamp=\"activeDeployment.metadata.creationTimestamp\"></relative-timestamp>\n" +
    "</small>\n" +
    "</div>\n" +
    "<div>\n" +
    "<div class=\"small truncate\">\n" +
    "<image-names ng-if=\"activeDeployment && !inProgressDeployment && showMetrics\" pod-template=\"activeDeployment.spec.template\" pods=\"podsByOwnerUID[activeDeployment.metadata.uid]\">\n" +
    "</image-names>\n" +
    "</div>\n" +
    "<div ng-if=\"inProgressDeployment\" class=\"small\">\n" +
    "{{deploymentConfig.spec.strategy.type}} <ellipsis-pulser color=\"dark\" size=\"sm\" display=\"inline\" msg=\"deployment in progress\"></ellipsis-pulser>\n" +
    "<span ng-if=\"'deploymentconfigs/log' | canI : 'get'\" class=\"deployment-log-link\">\n" +
    "<a ng-href=\"{{inProgressDeployment | navigateResourceURL}}?tab=logs\">View Log</a>\n" +
    "<span ng-if=\"'replicationcontrollers' | canI: 'update'\" class=\"action-divider\">|</span>\n" +
    "</span>\n" +
    "<span ng-if=\"'replicationcontrollers' | canI : 'update'\" class=\"deployment-log-link\">\n" +
    "<a href=\"\" ng-click=\"cancelDeployment()\" role=\"button\">Cancel</a>\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div column flex class=\"shield\" ng-if=\"activeDeployment\" ng-class=\"{ 'shield-lg': (activeDeployment | annotation: 'deploymentVersion').length > 3 }\">\n" +
    "<a ng-href=\"{{activeDeployment | navigateResourceURL}}\">\n" +
    "<span class=\"shield-number\">#{{activeDeployment | annotation: 'deploymentVersion'}}</span>\n" +
    "</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div row class=\"deployment-body\">\n" +
    "\n" +
    "<div column class=\"overview-donut\" ng-repeat=\"deployment in orderedDeployments track by (deployment | uid)\" ng-class=\"{ latest: isDeploymentLatest(deployment) }\" ng-if=\"!activeDeployment || !(isDeploymentLatest(deployment) && ((deployment | deploymentStatus) == 'Cancelled' || (deployment | deploymentStatus) == 'Failed'))\">\n" +
    "<deployment-donut rc=\"deployment\" deployment-config=\"deploymentConfigs[dcName]\" pods=\"podsByOwnerUID[deployment.metadata.uid]\" hpa=\"getHPA(deploymentConfig) || getHPA(deployment)\" limit-ranges=\"limitRanges\" scalable=\"isScalableDeployment(deployment)\" alerts=\"alerts\">\n" +
    "</deployment-donut>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div column class=\"overview-donut-connector\" ng-class=\"{'contains-deployment-status-msg':deployments.length === 1}\" ng-if=\"inProgressDeployment\">\n" +
    "<div ng-if=\"deployments.length > 1\" class=\"deployment-connector-arrow\">\n" +
    "</div>\n" +
    "<div ng-if=\"deployments.length === 1\" class=\"deployment-status-msg\">\n" +
    "<status-icon status=\"deployments[0] | deploymentStatus\" class=\"mar-right-xs\"></status-icon>\n" +
    "Deployment&nbsp;#{{deployments[0] | annotation : 'deploymentVersion'}} {{deployments[0] | deploymentStatus | lowercase}}\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div column class=\"overview-unsuccessful-state\" ng-if=\"!activeDeployment && !inProgressDeployment\" ng-switch=\"deployments[0] | deploymentStatus\">\n" +
    "<div ng-switch-when=\"Cancelled\">\n" +
    "<span class=\"deployment-status-msg\">\n" +
    "<i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\n" +
    "{{dcName}}\n" +
    "<a ng-href=\"{{deployments[0] | navigateResourceURL}}\">#{{deployments[0] | annotation: 'deploymentVersion'}}</a>\n" +
    "cancelled\n" +
    "</span>\n" +
    "</div>\n" +
    "<div ng-switch-when=\"Failed\">\n" +
    "<span class=\"text-danger deployment-status-msg\">\n" +
    "<i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n" +
    "{{dcName}}\n" +
    "<a ng-href=\"{{deployments[0] | navigateResourceURL}}\">#{{deployments[0] | annotation: 'deploymentVersion'}}</a>\n" +
    "failed\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div column class=\"deployment-details\" ng-if=\"activeDeployment && !inProgressDeployment\">\n" +
    "\n" +
    "\n" +
    "<deployment-metrics ng-if=\"showMetrics && !collapse\" pods=\"podsByOwnerUID[activeDeployment.metadata.uid]\" containers=\"activeDeployment.spec.template.spec.containers\" compact class=\"overview-metrics\">\n" +
    "</deployment-metrics>\n" +
    "<pod-template ng-if=\"!showMetrics\" pod-template=\"activeDeployment.spec.template\"></pod-template>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/overview/_image-names.html',
    "<span>{{podTemplate.spec.containers[0].image | imageStreamName}}</span>\n" +
    "<span ng-repeat=\"id in imageIDs\" title=\"{{id}}\">\n" +
    "<span class=\"hash\">{{id | stripSHAPrefix | limitTo: 7}}</span><span ng-if=\"!$last\">,</span>\n" +
    "</span>\n" +
    "<span ng-if=\"podTemplate.spec.containers.length > 1\"> and {{podTemplate.spec.containers.length - 1}} other image<span ng-if=\"podTemplate.spec.containers.length > 2\">s</span></span>"
  );


  $templateCache.put('views/overview/_pod.html',
    "<div class=\"deployment-tile\" ng-if=\"pod.kind === 'Pod'\">\n" +
    "<ng-include src=\"'views/overview/_service-header.html'\"></ng-include>\n" +
    "<div class=\"rc-header\"> \n" +
    "<div>\n" +
    "Pod\n" +
    "<a ng-href=\"{{pod | navigateResourceURL}}\">{{pod.metadata.name}}</a>\n" +
    "<small class=\"overview-timestamp\">\n" +
    "<span class=\"hidden-xs\">&ndash;</span>\n" +
    "<relative-timestamp timestamp=\"pod.metadata.creationTimestamp\"></relative-timestamp>\n" +
    "</small>\n" +
    "</div>\n" +
    "<div class=\"small truncate\">\n" +
    "<image-names ng-if=\"showMetrics\" pod-template=\"pod\" pods=\"[pod]\"></image-names>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div row class=\"deployment-body\">\n" +
    "<div column class=\"overview-donut\">\n" +
    "<pod-donut pods=\"[pod]\" class=\"clickable\" ng-click=\"viewPod()\">\n" +
    "</pod-donut>\n" +
    "\n" +
    "<a href=\"\" class=\"sr-only\" ng-click=\"viewPod()\" role=\"button\">\n" +
    "View pod\n" +
    "</a>\n" +
    "</div>\n" +
    "<div column class=\"deployment-details\">\n" +
    "<deployment-metrics ng-if=\"showMetrics && !collapse\" pods=\"[pod]\" containers=\"pod.spec.containers\" compact class=\"overview-metrics\">\n" +
    "</deployment-metrics>\n" +
    "<pod-template ng-if=\"!showMetrics\" pod-template=\"pod\"></pod-template>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/overview/_rc.html',
    "<div class=\"deployment-tile\">\n" +
    "<ng-include src=\"'views/overview/_service-header.html'\"></ng-include>\n" +
    "<div class=\"deployment-header\">\n" +
    "<div class=\"rc-header\">\n" +
    "<div>\n" +
    "{{deployment.kind | humanizeKind : true}}\n" +
    "<a ng-href=\"{{deployment | navigateResourceURL}}\">{{deployment.metadata.name}}</a>\n" +
    "<small class=\"overview-timestamp\">\n" +
    "<span class=\"hidden-xs\">&ndash;</span>\n" +
    "<relative-timestamp timestamp=\"deployment.metadata.creationTimestamp\"></relative-timestamp>\n" +
    "</small>\n" +
    "</div>\n" +
    "<div class=\"small truncate\">\n" +
    "<image-names ng-if=\"showMetrics\" pod-template=\"deployment.spec.template\" pods=\"podsByOwnerUID[deployment.metadata.uid]\">\n" +
    "</image-names>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div row class=\"deployment-body\">\n" +
    "\n" +
    "<div column class=\"overview-donut\" ng-class=\"{ latest: isDeploymentLatest(deployment) }\">\n" +
    "<deployment-donut rc=\"deployment\" deployment-config=\"deploymentConfigs[dcName]\" pods=\"podsByOwnerUID[deployment.metadata.uid]\" hpa=\"getHPA(deployment)\" limit-ranges=\"limitRanges\" scalable=\"isScalableDeployment(deployment)\" alerts=\"alerts\">\n" +
    "</deployment-donut>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div column class=\"deployment-details\">\n" +
    "<deployment-metrics ng-if=\"showMetrics && !collapse\" pods=\"podsByOwnerUID[deployment.metadata.uid]\" containers=\"deployment.spec.template.spec.containers\" compact class=\"overview-metrics\">\n" +
    "</deployment-metrics>\n" +
    "<pod-template ng-if=\"!showMetrics\" pod-template=\"deployment.spec.template\"></pod-template>\n" +
    "</div>\n" +
    "\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/overview/_service-group.html',
    "<div class=\"service-group\">\n" +
    "<div class=\"service-group-header\" ng-if=\"service.metadata.labels.app || displayRoute\" ng-click=\"toggleCollapse($event)\" ng-class=\"{ 'has-app-label': appName }\">\n" +
    "<h2 ng-if=\"appName\" class=\"app-name\">\n" +
    "<i class=\"fa fa-angle-down fa-fw\" aria-hidden=\"true\" ng-if=\"!collapse\"></i>\n" +
    "<i class=\"fa fa-angle-right fa-fw\" aria-hidden=\"true\" ng-if=\"collapse\"></i>\n" +
    "{{appName | startCase}}\n" +
    "</h2>\n" +
    "<h3 class=\"route-title truncate\">\n" +
    "<span ng-if=\"appName && (displayRoute | isWebRoute)\">\n" +
    "<i class=\"fa fa-external-link small\" aria-hidden=\"true\"></i>\n" +
    "</span>\n" +
    "<span ng-if=\"!appName\">\n" +
    "<i class=\"fa fa-angle-down fa-fw\" aria-hidden=\"true\" ng-if=\"!collapse\"></i>\n" +
    "<i class=\"fa fa-angle-right fa-fw\" aria-hidden=\"true\" ng-if=\"collapse\"></i>\n" +
    "</span>\n" +
    "<a ng-if=\"displayRoute | isWebRoute\" target=\"_blank\" ng-href=\"{{displayRoute | routeWebURL}}\">{{displayRoute | routeLabel}}</a>\n" +
    "<span ng-if=\"displayRoute && !(displayRoute | isWebRoute)\">{{displayRoute | routeLabel}}</span>\n" +
    "<span ng-if=\"routeWarningsByService[service.metadata.name] && routesByService[service.metadata.name].length === 1\">\n" +
    "<route-warnings warnings=\"routeWarningsByService[service.metadata.name]\"></route-warnings>\n" +
    "</span>\n" +
    "<small ng-if=\"(primaryServiceRoutes | hashSize) > 1\" class=\"other-routes-msg\">\n" +
    "and\n" +
    "<a ng-href=\"project/{{projectName}}/browse/routes\">{{(primaryServiceRoutes | hashSize) - 1}} other route<span ng-if=\"(primaryServiceRoutes | hashSize) > 2\">s</span></a>\n" +
    "</small>\n" +
    "</h3>\n" +
    "<span ng-if=\"!displayRoute\" class=\"create-route-link\">\n" +
    "<a ng-if=\"'routes' | canI : 'create'\" ng-href=\"project/{{service.metadata.namespace}}/create-route?service={{service.metadata.name}}\">Create Route</a>\n" +
    "</span>\n" +
    "</div>\n" +
    "<div>\n" +
    "<div class=\"service-group-triggers\">\n" +
    "<div ng-repeat=\"dc in deploymentConfigsByService[service.metadata.name || '']\">\n" +
    "<div row ng-repeat=\"pipeline in recentPipelinesByDC[dc.metadata.name] | orderObjectsByDate : true track by (pipeline | uid)\" class=\"animate-repeat hide-ng-leave\">\n" +
    "<build-pipeline flex build=\"pipeline\" collapse-stages-on-completion=\"true\" build-config-name-on-expanded=\"true\"></build-pipeline>\n" +
    "</div>\n" +
    "<div>\n" +
    "<triggers triggers=\"dc.spec.triggers\" builds-by-output-image=\"recentBuildsByOutputImage\" namespace=\"dc.metadata.namespace\"></triggers>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<service-group-notifications ng-if=\"service\" collapsed=\"collapse\" deployment-configs-by-service=\"deploymentConfigsByService\" deployments-by-service=\"deploymentsByService\" child-services=\"childServices\" service=\"service\" pods-by-owner-uid=\"podsByOwnerUID\">\n" +
    "</service-group-notifications>\n" +
    "<div uib-collapse=\"collapse\" class=\"service-group-body\">\n" +
    "\n" +
    "<div class=\"overview-services\" ng-class=\"{ 'single-alternate-service': (alternateServices | hashSize) === 1 && totalWeight }\">\n" +
    "<overview-service ng-init=\"isPrimary = true\" class=\"primary-service\"></overview-service>\n" +
    "<overview-service ng-init=\"isAlternate = true\" ng-repeat=\"service in alternateServices\" class=\"alternate-service\">\n" +
    "</overview-service>\n" +
    "<overview-service ng-init=\"isChild = true\" ng-repeat=\"service in childServices\">\n" +
    "</overview-service>\n" +
    "<div flex column ng-if=\"alternateServices.length === 0 && childServices.length === 0 && service\" class=\"no-child-services-block\">\n" +
    "<div class=\"no-child-services-message\">\n" +
    "<div class=\"pad-xxl\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "<h2>No grouped services.</h2>\n" +
    "<p>\n" +
    "No services are grouped with <a ng-href=\"{{service | navigateResourceURL}}\">{{service.metadata.name}}</a>.\n" +
    "<span ng-if=\"(services | hashSize) > 1 && 'services' | canI : 'update'\">Add a service to group them together.</span>\n" +
    "</p>\n" +
    "<div ng-if=\"(services | hashSize) > 1 && 'services' | canI : 'update'\">\n" +
    "<button class=\"btn btn-primary\" ng-click=\"linkService()\">\n" +
    "Group Service\n" +
    "</button>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/overview/_service-header.html',
    "<div row class=\"service-title\" ng-if=\"service\">\n" +
    "<div class=\"service-name\">\n" +
    "<span class=\"pficon pficon-service\" aria-hidden=\"true\" title=\"Service\"></span>\n" +
    "<span class=\"sr-only\">Service</span>\n" +
    "<a ng-href=\"{{service | navigateResourceURL}}\">{{service.metadata.name}}</a>\n" +
    "\n" +
    "<span ng-if=\"!isAlternate && alternateServices.length && !isChild && ('services' | canI : 'update')\" class=\"small mar-left-sm mar-right-sm\">\n" +
    "<ng-include src=\"'views/overview/_service-linking-button.html'\"></ng-include>\n" +
    "</span>\n" +
    "</div>\n" +
    "<div ng-if=\"alternateServices.length && !isChild\" class=\"service-metadata\">\n" +
    "<ng-include src=\"'views/overview/_traffic-percent.html'\"></ng-include>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"(!alternateServices.length || isChild) && ('services' | canI : 'update')\">\n" +
    "<ng-include src=\"'views/overview/_service-linking-button.html'\"></ng-include>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/overview/_service-linking-button.html',
    " <a href=\"\" ng-if=\"isPrimary && (services | hashSize) > ((childServices | hashSize) + 1)\" ng-click=\"linkService()\" role=\"button\" ng-attr-title=\"Group service to {{service.metadata.name}}\"><i class=\"fa fa-chain action-button link-service-button\" aria-hidden=\"true\"></i><span class=\"sr-only\">Group service to {{service.metadata.name}}</span></a>\n" +
    "<a href=\"\" ng-if=\"isChild\" ng-click=\"removeLink(service)\" role=\"button\" ng-attr-title=\"Remove {{service.metadata.name}} from service group\"><i class=\"fa fa-chain-broken action-button link-service-button\" aria-hidden=\"true\"></i><span class=\"sr-only\">Remove {{service.metadata.name}} from service group</span></a>"
  );


  $templateCache.put('views/overview/_service.html',
    "<div ng-if=\"!(visibleDeploymentsByConfig | hashSize) && !(visibleReplicaSets | hashSize) && !(monopodsByService[service.metadata.name] | hashSize)\" class=\"no-deployments-block\">\n" +
    "<div column class=\"no-deployments-message\">\n" +
    "<ng-include src=\"'views/overview/_service-header.html'\"></ng-include>\n" +
    "<div class=\"pad-xxl\">\n" +
    "<h2>No deployments.</h2>\n" +
    "<p>\n" +
    "There are no deployments or pods for service\n" +
    "<a ng-href=\"{{service | navigateResourceURL}}\">{{service.metadata.name}}</a>.\n" +
    "</p>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-attr-row=\"{{!service ? '' : undefined}}\" ng-attr-wrap=\"{{!service ? '' : undefined}}\" ng-if=\"(visibleDeploymentsByConfig | hashSize) || (visibleReplicaSets | hashSize) || (monopodsByService[service.metadata.name || ''] | hashSize)\" class=\"deployment-block\" ng-class=\"{\n" +
    "       'no-service': !service,\n" +
    "       'service-multiple-targets': rcTileCount + (visibleReplicaSets | hashSize) + (monopodsByService[service.metadata.name] | hashSize) > 1\n" +
    "     }\">\n" +
    "<div ng-repeat=\"(dcName, deployments) in visibleDeploymentsByConfig\" class=\"deployment-tile-wrapper\">\n" +
    "\n" +
    "<overview-deployment-config ng-if=\"dcName\"></overview-deployment-config>\n" +
    "\n" +
    "\n" +
    "<div class=\"deployment-tile-wrapper\" ng-if=\"!dcName.length\" ng-repeat=\"deployment in deployments | orderObjectsByDate : true track by (deployment | uid)\">\n" +
    "<overview-replication-controller></overview-replication-controller>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"deployment-tile-wrapper\" ng-repeat=\"deployment in visibleReplicaSets track by (deployment | uid)\">\n" +
    "<overview-replication-controller></overview-replication-controller>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-repeat=\"pod in monopodsByService[service.metadata.name || ''] | orderObjectsByDate : true track by (pod | uid)\" class=\"deployment-tile-wrapper\">\n" +
    "<overview-pod></overview-pod>\n" +
    "</div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('views/overview/_traffic-percent.html',
    "<div ng-if=\"!totalWeight\">\n" +
    "No Traffic\n" +
    "</div>\n" +
    "<div ng-if=\"totalWeight\">\n" +
    "<span class=\"visible-xs visible-sm\">\n" +
    "Traffic {{(weightByService[service.metadata.name] / totalWeight) | percent}}\n" +
    "</span>\n" +
    "<div class=\"hidden-xs hidden-sm\">\n" +
    "<span class=\"traffic-label\">Traffic</span>\n" +
    "\n" +
    "<div class=\"progress progress-sm\" ng-style=\"{ width: ((weightByService[service.metadata.name] / totalWeight * 250) | number) + 'px'}\">\n" +
    "<div class=\"progress-bar\">\n" +
    "<span>\n" +
    "{{(weightByService[service.metadata.name] / totalWeight) | percent}}\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/pipelines.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content pipelines-page\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<div class=\"page-header page-header-bleed-right page-header-bleed-left\">\n" +
    "<div row mobile=\"column\" class=\"tech-preview-header\">\n" +
    "<h1 class=\"mar-top-none\">Pipelines</h1>\n" +
    "<span><span class=\"label label-warning\">Technology Preview</span></span>\n" +
    "</div>\n" +
    "</div>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"!(buildConfigs | hashSize)\" class=\"mar-top-lg\">\n" +
    "<div ng-if=\"!buildConfigsLoaded\">\n" +
    "Loading...\n" +
    "</div>\n" +
    "<div ng-if=\"buildConfigsLoaded\" class=\"empty-state-message text-center\">\n" +
    "<h2>No pipelines.</h2>\n" +
    "<div ng-if=\"project.metadata.name | canIAddToProject\">\n" +
    "<p>\n" +
    "No pipelines have been added to project {{projectName}}.\n" +
    "</p>\n" +
    "<p ng-if=\"project.metadata.name | canIAddToProject\">\n" +
    "<a ng-href=\"project/{{projectName}}/create\" class=\"btn btn-lg btn-primary\">\n" +
    "Add to Project\n" +
    "</a>\n" +
    "</p>\n" +
    "</div>\n" +
    "<div ng-if=\"!(project.metadata.name | canIAddToProject)\">\n" +
    "<ng-include src=\"'views/_request-access.html'\"></ng-include>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-repeat=\"(buildConfigName, buildConfig) in buildConfigs\" ng-if=\"!buildConfig || (buildConfig | isJenkinsPipelineStrategy)\" class=\"animate-repeat\">\n" +
    "<div ng-if=\"buildConfig\">\n" +
    "<div class=\"pull-right\">\n" +
    "<button class=\"btn btn-default\" ng-if=\"'buildconfigs/instantiate' | canI : 'create'\" ng-click=\"startBuild(buildConfigName)\">\n" +
    "Start Pipeline\n" +
    "</button>\n" +
    "</div>\n" +
    "<h2>\n" +
    "<a ng-href=\"{{buildConfig | navigateResourceURL}}\">{{buildConfigName}}</a>\n" +
    "<small>created <relative-timestamp timestamp=\"buildConfig.metadata.creationTimestamp\"></relative-timestamp></small>\n" +
    "</h2>\n" +
    "<div ng-if=\"buildConfig.spec.source.git.uri\">\n" +
    "Source Repository:\n" +
    "<span class=\"word-break\" ng-if=\"buildConfigs[buildConfigName].spec.source.type == 'Git'\"><osc-git-link uri=\"buildConfigs[buildConfigName].spec.source.git.uri\" ref=\"buildConfigs[buildConfigName].spec.source.git.ref\" context-dir=\"buildConfigs[buildConfigName].spec.source.contextDir\">{{buildConfigs[buildConfigName].spec.source.git.uri}}</osc-git-link></span>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"!buildConfig\">\n" +
    "<h2>{{buildConfigName}}</h2>\n" +
    "\n" +
    "<div ng-if=\"buildConfigsLoaded\" class=\"alert alert-warning\">\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" aria-hidden=\"true\"></span>\n" +
    "<span class=\"sr-only\">Warning:</span>\n" +
    "Build config <strong>{{buildConfigName}}</strong> no longer exists.\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"buildsLoaded && !(interestingBuildsByConfig[buildConfigName] | hashSize)\">\n" +
    "<em>No pipeline builds have run for {{buildConfigName}}.</em>\n" +
    "</div>\n" +
    "<div ng-if=\"interestingBuildsByConfig[buildConfigName] | hashSize\">\n" +
    "<div ng-if=\"!(statsByConfig[buildConfigName].avgDuration | isNil)\" class=\"hidden-xs pull-right text-muted\">\n" +
    "Average Duration: {{statsByConfig[buildConfigName].avgDuration | timeOnlyDuration}}\n" +
    "</div>\n" +
    "<h4>\n" +
    "Recent Runs\n" +
    "<small ng-if=\"!(statsByConfig[buildConfigName].avgDuration | isNil)\" class=\"visible-xs-block mar-top-xs text-muted\">\n" +
    "Average Duration: {{statsByConfig[buildConfigName].avgDuration | timeOnlyDuration}}\n" +
    "</small>\n" +
    "</h4>\n" +
    "<div ng-repeat=\"build in (interestingBuildsByConfig[buildConfigName] | orderObjectsByDate : true) track by (build | uid)\" class=\"animate-repeat\">\n" +
    "<build-pipeline build=\"build\"></build-pipeline>\n" +
    "</div>\n" +
    "<div ng-if=\"buildConfig\" class=\"mar-top-sm\">\n" +
    "<a ng-href=\"{{buildConfigs[buildConfigName] | navigateResourceURL}}\">View History</a>\n" +
    "<span ng-if=\"'buildconfigs' | canI : 'update'\">\n" +
    "<span class=\"action-divider\">|</span>\n" +
    "<a ng-href=\"{{buildConfig | editResourceURL}}\" role=\"button\">Edit Pipeline</a>\n" +
    "</span>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/pods.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header header-light\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"page-header page-header-bleed-right page-header-bleed-left\">\n" +
    "<h1>Pods</h1>\n" +
    "</div>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"!renderOptions.showGetStarted\" class=\"data-toolbar\">\n" +
    "<div class=\"data-toolbar-filter\">\n" +
    "<project-filter></project-filter>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12 gutter-top\">\n" +
    "<pods-table pods=\"pods\" empty-message=\"emptyMessage\"></pods-table>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/project.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page class=\"project-overview-page\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header header-light\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<tasks></tasks>\n" +
    "<div ng-if=\"renderOptions.showToolbar\" class=\"page-header page-header-bleed-right page-header-bleed-left\">\n" +
    "<h1 title=\"Overview\">Overview</h1>\n" +
    "</div>\n" +
    "\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"renderOptions.showToolbar\" class=\"data-toolbar\">\n" +
    "<div class=\"data-toolbar-filter\">\n" +
    "<project-filter></project-filter>\n" +
    "</div>\n" +
    "<div class=\"data-toolbar-views pad-left-lg\">\n" +
    "<div class=\"actions\">\n" +
    "<div class=\"btn-group\">\n" +
    "<label class=\"btn btn-default\" ng-model=\"$parent.overviewMode\" uib-btn-radio=\"'tiles'\" title=\"Tile View\">\n" +
    "<i class=\"fa fa-list\"></i>\n" +
    "</label>\n" +
    "<label class=\"btn btn-default\" ng-model=\"$parent.overviewMode\" uib-btn-radio=\"'topology'\" title=\"Topology View\">\n" +
    "<i class=\"pficon pficon-topology\"></i>\n" +
    "</label>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content surface-shaded\">\n" +
    "<div class=\"container-fluid surface-shaded\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12 gutter-top\">\n" +
    "\n" +
    "<div ng-if=\"(services | hashSize) === 0 && (monopodsByService[''] | hashSize) === 0 && (deploymentsByServiceByDeploymentConfig[''] | hashSize) === 0\">\n" +
    "\n" +
    "<div ng-if=\"renderOptions.showGetStarted\" class=\"empty-project text-center\">\n" +
    "<h2>Get started with your project.</h2>\n" +
    "<p class=\"gutter-top\">\n" +
    "Use your source or an example repository to build an application image, or add components like databases and message queues.\n" +
    "</p>\n" +
    "<p class=\"gutter-top\">\n" +
    "<a ng-href=\"project/{{projectName}}/create\" class=\"btn btn-lg btn-primary\">\n" +
    "Add to Project\n" +
    "</a>\n" +
    "</p>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"!renderOptions.showGetStarted\">\n" +
    "<em>{{emptyMessage}}</em>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"overviewMode == 'topology' && !renderOptions.showGetStarted\" class=\"kube-topology-block\">\n" +
    "<kubernetes-topology-graph bottom-of-window=\"1\" items=\"topologyItems\" relations=\"topologyRelations\" kinds=\"topologyKinds\" selection=\"topologySelection\">\n" +
    "</kubernetes-topology-graph>\n" +
    "<svg class=\"kube-topology\" hidden>\n" +
    "<defs>\n" +
    "<g class=\"Pod\" id=\"vertex-Pod\">\n" +
    "<circle r=\"16\"></circle>\n" +
    "<text y=\"6\" x=\"0.5\">&#xf1b3;</text>\n" +
    "</g>\n" +
    "<g class=\"Service\" id=\"vertex-Service\">\n" +
    "<circle r=\"16\"></circle>\n" +
    "<text y=\"10\" x=\"1\">&#xe61e;</text>\n" +
    "</g>\n" +
    "<g class=\"ReplicationController\" id=\"vertex-ReplicationController\">\n" +
    "<circle r=\"16\"></circle>\n" +
    "<text y=\"9\">&#xe624;</text>\n" +
    "</g>\n" +
    "<g class=\"DeploymentConfig\" id=\"vertex-DeploymentConfig\">\n" +
    "<circle r=\"16\"></circle>\n" +
    "<text y=\"8\">&#xf013;</text>\n" +
    "</g>\n" +
    "<g class=\"Route\" id=\"vertex-Route\">\n" +
    "<circle r=\"16\"></circle>\n" +
    "<text y=\"9\">&#xe625;</text>\n" +
    "</g>\n" +
    "</defs>\n" +
    "</svg>\n" +
    "</div>\n" +
    "<div ng-if=\"overviewMode == 'tiles'\">\n" +
    "\n" +
    "<section ng-repeat=\"(serviceId, service) in services\" class=\"components components-group\" ng-attr-id=\"service-{{serviceId}}\">\n" +
    "<div class=\"osc-object components-panel service\" ng-init=\"numPorts = service.spec.ports.length\" kind=\"Service\" resource=\"service\">\n" +
    "<div class=\"component-block\">\n" +
    "<div class=\"component\">\n" +
    "<div ng-attr-title=\"{{service | serviceImplicitDNSName}}\" class=\"component-label\">\n" +
    "\n" +
    "Service <span ng-if=\"displayRouteByService[serviceId]\">: <a class=\"subtle-link service\" href=\"{{service | navigateResourceURL}}\">{{serviceId}}</a></span>\n" +
    "</div>\n" +
    "\n" +
    "<h2 ng-if=\"displayRouteByService[serviceId]\" ng-init=\"otherRoutes = (routesByService[serviceId] | hashSize) - 1\">\n" +
    "<span ng-if=\"(displayRouteByService[serviceId] | isWebRoute)\">\n" +
    "\n" +
    "<a href=\"{{displayRouteByService[serviceId] | routeWebURL}}\" class=\"route\" target=\"_blank\">{{displayRouteByService[serviceId] | routeLabel}}</a>\n" +
    "</span>\n" +
    "\n" +
    "<span ng-if=\"!(displayRouteByService[serviceId] | isWebRoute)\" class=\"route\">\n" +
    "{{displayRouteByService[serviceId] | routeLabel}}\n" +
    "</span>\n" +
    "<span class=\"small\" ng-if=\"otherRoutes\">\n" +
    "(and\n" +
    "<a href=\"project/{{projectName}}/browse/routes\"><span ng-if=\"otherRoutes === 1\">one other route</span><span ng-if=\"otherRoutes > 1\">{{otherRoutes}} other routes</span></a>)\n" +
    "</span>\n" +
    "<span ng-if=\"!otherRoutes\">\n" +
    "<route-warnings warnings=\"routeWarningsByService[serviceId][displayRouteByService[serviceId].metadata.name]\"></route-warnings>\n" +
    "</span>\n" +
    "<div ng-if=\"(routeWarningsByService[serviceId] | hashSize) > 0 && otherRoutes\">\n" +
    "<small>\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" aria-hidden=\"true\"></span>\n" +
    "This service has <a href=\"project/{{projectName}}/browse/routes\">routes</a> with warnings.\n" +
    "</small>\n" +
    "</div>\n" +
    "</h2>\n" +
    "\n" +
    "\n" +
    "<h2 ng-if=\"!displayRouteByService[serviceId]\">\n" +
    "<a class=\"service\" href=\"{{service | navigateResourceURL}}\">{{serviceId}}</a>\n" +
    "</h2>\n" +
    "</div>\n" +
    "<div class=\"component meta-data\">\n" +
    "<span ng-if=\"numPorts\" class=\"ports\">\n" +
    "\n" +
    "<span ng-repeat=\"portMapping in service.spec.ports | orderBy:'port' | limitTo:2\">\n" +
    "\n" +
    "<span class=\"port-mappings\">\n" +
    "\n" +
    "<span ng-attr-title=\"{{portMapping.name}}\">{{portMapping.port}}/{{portMapping.protocol}}</span>&#8201;&#8594;&#8201;{{portMapping.targetPort}}<span ng-if=\"$index < (numPorts - 1)\">, </span></span>\n" +
    "</span>\n" +
    "<span ng-if=\"numPorts > 2\" ng-init=\"numRemaining = numPorts - 2\" class=\"more-ports\">\n" +
    "and {{numRemaining}} {{numRemaining == 1 ? \"other\" : \"others\"}}\n" +
    "</span>\n" +
    "</span>\n" +
    "<div ng-if=\"!displayRouteByService[serviceId]\" class=\"add-route-link\">\n" +
    "<a ng-href=\"project/{{project.metadata.name}}/create-route?service={{service.metadata.name}}\">Create Route</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-repeat=\"(deploymentConfigId, deploymentConfig) in deploymentConfigsByService[serviceId]\" ng-if=\"!deploymentsByServiceByDeploymentConfig[serviceId][deploymentConfigId]\">\n" +
    "\n" +
    "<triggers triggers=\"deploymentConfig.spec.triggers\" builds-by-output-image=\"recentBuildsByOutputImage\" namespace=\"projectName\"></triggers>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-repeat=\"(deploymentConfigId, deployments) in deploymentsByServiceByDeploymentConfig[serviceId]\">\n" +
    "\n" +
    "<div ng-if=\"deploymentConfigsByService[serviceId][deploymentConfigId]\">\n" +
    "\n" +
    "<triggers triggers=\"deploymentConfigsByService[serviceId][deploymentConfigId].spec.triggers\" builds-by-output-image=\"recentBuildsByOutputImage\" namespace=\"projectName\"></triggers>\n" +
    "</div>\n" +
    "<div ng-repeat=\"deployment in deployments | orderObjectsByDate : true track by (deployment | uid)\" ng-if=\"isVisibleDeployment(deployment)\" class=\"animate-repeat\">\n" +
    "\n" +
    "<overview-deployment rc=\"deployment\" deployment-config-id=\"deploymentConfigId\" deployment-config-missing=\"deploymentConfigs && !deploymentConfigs[deploymentConfigId]\" deployment-config-different-service=\"deploymentConfigs[deploymentConfigId] && !deploymentConfigsByService[serviceId][deploymentConfigId]\" deployment-config=\"deploymentConfigs[deploymentConfigId]\" scalable=\"isScalable(deployment, deploymentConfigId)\" hpa=\"getHPA(deployment.metadata.name, deploymentConfigId)\" limit-ranges=\"limitRanges\" project=\"project\" images-by-docker-reference=\"imagesByDockerReference\" builds=\"builds\" pods=\"podsByDeployment[deployment.metadata.name]\" alerts=\"alerts\">\n" +
    "</overview-deployment>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-repeat=\"pod in monopodsByService[serviceId] track by (pod | uid)\">\n" +
    "<overview-monopod pod=\"pod\"></overview-monopod>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-if=\"(podsByService[serviceId] | hashSize) === 0 && (deploymentsByServiceByDeploymentConfig[serviceId] | hashSize) === 0\" class=\"osc-object components-panel deployment-block deployments none\">\n" +
    "<span class=\"pficon pficon-info\"></span> There are no pods or deployments for this service.\n" +
    "</div>\n" +
    "</section>\n" +
    "\n" +
    "<section ng-repeat=\"(deploymentConfigId, deployments) in deploymentsByServiceByDeploymentConfig['']\" class=\"components\">\n" +
    "<div ng-repeat=\"(deploymentId, deployment) in deploymentsByServiceByDeploymentConfig[''][deploymentConfigId] track by (deployment | uid)\" ng-if=\"isVisibleDeployment(deployment)\">\n" +
    "<div class=\"builds-no-service\" ng-if=\"deploymentConfigs[deploymentConfigId] && deploymentConfigsByService[''][deploymentConfigId]\">\n" +
    "\n" +
    "<triggers triggers=\"deploymentConfigs[deploymentConfigId].spec.triggers\" builds-by-output-image=\"recentBuildsByOutputImage\" namespace=\"projectName\"></triggers>\n" +
    "</div>\n" +
    "\n" +
    "<overview-deployment rc=\"deployment\" deployment-config-id=\"deploymentConfigId\" deployment-config-missing=\"deploymentConfigs && !deploymentConfigs[deploymentConfigId]\" deployment-config-different-service=\"deploymentConfigs[deploymentConfigId] && !deploymentConfigsByService[''][deploymentConfigId]\" scalable=\"isScalable(deployment, deploymentConfigId)\" hpa=\"getHPA(deployment.metadata.name, deploymentConfigId)\" limit-ranges=\"limitRanges\" project=\"project\" images-by-docker-reference=\"imagesByDockerReference\" builds=\"builds\" pods=\"podsByDeployment[deployment.metadata.name]\">\n" +
    "</overview-deployment>\n" +
    "</div>\n" +
    "</section>\n" +
    "<section ng-repeat=\"pod in monopodsByService[''] track by (pod | uid)\" class=\"components\">\n" +
    "<overview-monopod pod=\"pod\"></overview-monopod>\n" +
    "</section>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/projects.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"middle surface-shaded\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content\">\n" +
    "<div ng-if=\"!showGetStarted\" class=\"container surface-shaded\"> \n" +
    "<div ng-if=\"(projects | hashSize) === 0\" class=\"text-muted\" style=\"margin-top: 50px\">Loading...</div>\n" +
    "<div ng-if=\"(projects | hashSize) !== 0\" class=\"gutter-top\">\n" +
    "<h1 style=\"display: inline-block\">Projects</h1>\n" +
    "<a ng-if=\"canCreate\" href=\"create-project\" style=\"margin-top: 10px\" class=\"btn btn-lg btn-primary pull-right\">New Project</a>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-repeat=\"project in projects | orderByDisplayName track by project.metadata.name\" class=\"animate-repeat\">\n" +
    "<div row flex cross-axis=\"center\" class=\"tile tile-project tile-click tile-flex\">\n" +
    "<div flex class=\"project-summary\">\n" +
    "<h2 class=\"project truncate\">\n" +
    "<a class=\"tile-target\" href=\"project/{{project.metadata.name}}\">{{(project | uniqueDisplayName : projects)}}</a>\n" +
    "<span ng-if=\"project.status.phase != 'Active'\" data-toggle=\"tooltip\" title=\"This project has been marked for deletion.\" class=\"pficon pficon-warning-triangle-o\" style=\"cursor: help; vertical-align: top; margin-left: 5px\"></span>\n" +
    "</h2>\n" +
    "<div class=\"muted\" style=\"margin-top: -5px\" ng-if=\"project | description\">\n" +
    "<truncate-long-text content=\"project | description\" limit=\"512\" use-word-boundary=\"true\"></truncate-long-text>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div row flex main-axis=\"end\" class=\"project-actions\" ng-if=\"project.status.phase == 'Active'\">\n" +
    "<span class=\"fa-lg mar-right-lg\">\n" +
    "<a ng-href=\"project/{{project.metadata.name}}/edit\" class=\"action-button\">\n" +
    "<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n" +
    "<span class=\"sr-only\">Edit Project</span>\n" +
    "</a>\n" +
    "</span>\n" +
    "<delete-link class=\"fa-lg\" kind=\"Project\" resource-name=\"{{project.metadata.name}}\" project-name=\"{{project.metadata.name}}\" display-name=\"{{(project | displayName)}}\" type-name-to-confirm=\"true\" stay-on-current-page=\"true\" alerts=\"alerts\" button-only>\n" +
    "</delete-link>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"canCreate === false\" style=\"margin-top: 10px\">\n" +
    "<span ng-if=\"!newProjectMessage\">A cluster admin can create a project for you by running the command\n" +
    "<code>oadm new-project &lt;projectname&gt; --admin={{user.metadata.name || '&lt;YourUsername&gt;'}}</code></span>\n" +
    "<span ng-if=\"newProjectMessage\" ng-bind-html=\"newProjectMessage | linky\" style=\"white-space:pre\"></span>\n" +
    "</div>\n" +
    "<div style=\"margin-top: 10px\">\n" +
    "A project admin can add you to a role on a project by running the command\n" +
    "<code>oc policy add-role-to-user &lt;role&gt; {{user.metadata.name || '&lt;YourUsername&gt;'}} -n &lt;projectname&gt;</code>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"showGetStarted\">\n" +
    "<div class=\"container gutter-top\" ng-if=\"(alerts | hashSize) > 0\">\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "</div>\n" +
    "<div class=\"empty-state-message empty-state-full-page text-center\">\n" +
    "<h1>Welcome to OpenShift.</h1>\n" +
    "<p>\n" +
    "OpenShift helps you quickly develop, host, and scale applications.<br>\n" +
    "<span ng-if=\"canCreate\">Create a project for your application.</span>\n" +
    "</p>\n" +
    "<a ng-if=\"canCreate\" href=\"create-project\" class=\"btn btn-lg btn-primary\">New Project</a>\n" +
    "<p>To learn more, visit the OpenShift <a target=\"_blank\" ng-href=\"{{'' | helpLink}}\">documentation</a>.</p>\n" +
    "<p ng-if=\"canCreate === false\">\n" +
    "<span ng-if=\"!newProjectMessage\">A cluster admin can create a project for you by running the command<br>\n" +
    "<code>oadm new-project &lt;projectname&gt; --admin={{user.metadata.name || '&lt;YourUsername&gt;'}}</code></span>\n" +
    "<span ng-if=\"newProjectMessage\" ng-bind-html=\"newProjectMessage | linky\" style=\"white-space:pre\"></span>\n" +
    "</p>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/quota.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<h1>\n" +
    "<span ng-if=\"clusterQuotas | hashSize\">Cluster </span>Quota\n" +
    "</h1>\n" +
    "<div ng-if=\"!(quotas | hashSize) && !(clusterQuotas | hashSize)\">\n" +
    "<div class=\"help-block\">{{quotaHelp}}</div>\n" +
    "<p><em ng-if=\"!quotas && !clusterQuotas\">Loading...</em><em ng-if=\"quotas || clusterQuotas\">There are no resource quotas set on this project.</em></p>\n" +
    "</div>\n" +
    "<div ng-repeat=\"quota in clusterQuotas | orderBy: 'metadata.name'\" class=\"gutter-bottom\">\n" +
    "<h2 ng-if=\"(clusterQuotas | hashSize) > 1\">{{quota.metadata.name}}</h2>\n" +
    "<div ng-if=\"$first\" class=\"help-block\">Limits resource usage across a set of projects.</div>\n" +
    "<dl ng-if=\"quota.spec.quota.scopes.length\">\n" +
    "<dt>Scopes:</dt>\n" +
    "<dd>\n" +
    "<div ng-repeat=\"scope in quota.spec.quota.scopes\">\n" +
    "{{scope | startCase}}\n" +
    "<span class=\"text-muted small\" ng-if=\"scope | scopeDetails\">&mdash; {{scope | scopeDetails}}</span>\n" +
    "</div>\n" +
    "</dd>\n" +
    "</dl>\n" +
    "<div>\n" +
    "<div row wrap style=\"justify-content: center\">\n" +
    "<div ng-if=\"quota.status.total.hard.cpu\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">CPU <small>Request</small></h3>\n" +
    "<quota-usage-chart height=\"240\" used=\"namespaceUsageByClusterQuota[quota.metadata.name].used.cpu\" total=\"quota.status.total.hard.cpu\" cross-project-used=\"quota.status.total.used.cpu\" type=\"cpu\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div ng-if=\"quota.status.total.hard.memory\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">Memory <small>Request</small></h3>\n" +
    "<quota-usage-chart height=\"240\" used=\"namespaceUsageByClusterQuota[quota.metadata.name].used.memory\" cross-project-used=\"quota.status.total.used.memory\" total=\"quota.status.total.hard.memory\" type=\"memory\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div ng-if=\"quota.status.total.hard['requests.cpu']\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">CPU <small>Request</small></h3>\n" +
    "<quota-usage-chart height=\"240\" used=\"namespaceUsageByClusterQuota[quota.metadata.name].used['requests.cpu']\" cross-project-used=\"quota.status.total.used['requests.cpu']\" total=\"quota.status.total.hard['requests.cpu']\" type=\"cpu\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div ng-if=\"quota.status.total.hard['requests.memory']\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">Memory <small>Request</small></h3>\n" +
    "<quota-usage-chart height=\"240\" used=\"namespaceUsageByClusterQuota[quota.metadata.name].used['requests.memory']\" cross-project-used=\"quota.status.total.used['requests.memory']\" total=\"quota.status.total.hard['requests.memory']\" type=\"memory\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div ng-if=\"quota.status.total.hard['limits.cpu']\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">CPU <small>Limit</small></h3>\n" +
    "<quota-usage-chart height=\"240\" used=\"namespaceUsageByClusterQuota[quota.metadata.name].used['limits.cpu']\" cross-project-used=\"quota.status.total.used['limits.cpu']\" total=\"quota.status.total.hard['limits.cpu']\" type=\"cpu\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div ng-if=\"quota.status.total.hard['limits.memory']\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">Memory <small>Limit</small></h3>\n" +
    "<quota-usage-chart height=\"240\" used=\"namespaceUsageByClusterQuota[quota.metadata.name].used['limits.memory']\" cross-project-used=\"quota.status.total.used['limits.memory']\" total=\"quota.status.total.hard['limits.memory']\" type=\"memory\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"table-responsive\">\n" +
    "<table class=\"table\">\n" +
    "<thead>\n" +
    "<th>Resource type</th>\n" +
    "<th>Used (this project)</th>\n" +
    "<th>Used (all projects)</th>\n" +
    "<th>Max</th>\n" +
    "</thead>\n" +
    "<tbody>\n" +
    "<tr ng-if=\"!quota.status.total.used\" class=\"danger\">\n" +
    "<td colspan=\"5\">\n" +
    "<span data-toggle=\"tooltip\" title=\"Missing quota status\" class=\"pficon pficon-error-circle-o\" style=\"cursor: help\"></span>\n" +
    "Status has not been reported on this quota usage record. Any resources limited by this quota record can not be allocated.\n" +
    "</td>\n" +
    "</tr>\n" +
    "\n" +
    "<tr ng-repeat=\"(resourceType, specMax) in quota.spec.quota.hard\" ng-if=\"resourceType !== 'resourcequotas'\" ng-class=\"{\n" +
    "                              warning: (quota.status.total.used[resourceType] | usageValue) >= (quota.status.total.hard[resourceType] | usageValue)\n" +
    "                            }\">\n" +
    "<td>\n" +
    "{{resourceType | humanizeQuotaResource}}\n" +
    "<span ng-if=\"(quota.status.total.used[resourceType] | usageValue) >= (quota.status.total.hard[resourceType] | usageValue)\" data-toggle=\"tooltip\" title=\"Quota limit reached\" class=\"pficon pficon-warning-triangle-o\" style=\"cursor: help; vertical-align: middle\"></span>\n" +
    "</td>\n" +
    "<td>\n" +
    "<span ng-if=\"!namespaceUsageByClusterQuota[quota.metadata.name].used\">&mdash;</span>\n" +
    "<span ng-if=\"namespaceUsageByClusterQuota[quota.metadata.name].used\">{{namespaceUsageByClusterQuota[quota.metadata.name].used[resourceType] | usageWithUnits : resourceType}}</span>\n" +
    "</td>\n" +
    "<td>\n" +
    "<span ng-if=\"!quota.status.total.used\">&mdash;</span>\n" +
    "<span ng-if=\"quota.status.total.used\">{{quota.status.total.used[resourceType] | usageWithUnits : resourceType}}</span>\n" +
    "</td>\n" +
    "<td>\n" +
    "<span ng-if=\"!quota.status.total.hard\">{{specMax | usageWithUnits : resourceType}}</span>\n" +
    "<span ng-if=\"quota.status.total.hard\">{{quota.status.total.hard[resourceType] | usageWithUnits : resourceType}}</span>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "<h1 ng-if=\"(clusterQuotas | hashSize) && (quotas | hashSize)\">Project Quota</h1>\n" +
    "<div ng-repeat=\"quota in quotas | orderBy: 'metadata.name'\" class=\"gutter-bottom\">\n" +
    "<h2 ng-if=\"(quotas | hashSize) > 1\">{{quota.metadata.name}}</h2>\n" +
    "<div ng-if=\"$first\" class=\"help-block mar-bottom-md\">{{quotaHelp}}</div>\n" +
    "<dl ng-if=\"quota.spec.scopes.length\">\n" +
    "<dt>Scopes:</dt>\n" +
    "<dd>\n" +
    "<div ng-repeat=\"scope in quota.spec.scopes\">\n" +
    "{{scope | startCase}}\n" +
    "<span class=\"text-muted small\" ng-if=\"scope | scopeDetails\">&mdash; {{scope | scopeDetails}}</span>\n" +
    "</div>\n" +
    "</dd>\n" +
    "</dl>\n" +
    "<div>\n" +
    "<div row wrap style=\"justify-content: center\">\n" +
    "<div column ng-if=\"quota.status.hard.cpu\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">CPU <small>Request</small></h3>\n" +
    "<quota-usage-chart used=\"quota.status.used.cpu\" total=\"quota.status.hard.cpu\" type=\"cpu\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div column ng-if=\"quota.status.hard.memory\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">Memory <small>Request</small></h3>\n" +
    "<quota-usage-chart used=\"quota.status.used.memory\" total=\"quota.status.hard.memory\" type=\"memory\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div column ng-if=\"quota.status.hard['requests.cpu']\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">CPU <small>Request</small></h3>\n" +
    "<quota-usage-chart used=\"quota.status.used['requests.cpu']\" total=\"quota.status.hard['requests.cpu']\" type=\"cpu\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div column ng-if=\"quota.status.hard['requests.memory']\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">Memory <small>Request</small></h3>\n" +
    "<quota-usage-chart used=\"quota.status.used['requests.memory']\" total=\"quota.status.hard['requests.memory']\" type=\"memory\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div ng-if=\"quota.status.hard['limits.cpu']\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">CPU <small>Limit</small></h3>\n" +
    "<quota-usage-chart used=\"quota.status.used['limits.cpu']\" total=\"quota.status.hard['limits.cpu']\" type=\"cpu\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div ng-if=\"quota.status.hard['limits.memory']\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">Memory <small>Limit</small></h3>\n" +
    "<quota-usage-chart used=\"quota.status.used['limits.memory']\" total=\"quota.status.hard['limits.memory']\" type=\"memory\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"table-responsive\">\n" +
    "<table class=\"table\">\n" +
    "<thead>\n" +
    "<th>Resource type</th>\n" +
    "<th>Used</th>\n" +
    "<th>Max</th>\n" +
    "</thead>\n" +
    "<tbody>\n" +
    "<tr ng-if=\"!quota.status.used\" class=\"danger\">\n" +
    "<td colspan=\"5\">\n" +
    "<span data-toggle=\"tooltip\" title=\"Missing quota status\" class=\"pficon pficon-error-circle-o\" style=\"cursor: help\"></span>\n" +
    "Status has not been reported on this quota usage record. Any resources limited by this quota record can not be allocated.\n" +
    "</td>\n" +
    "</tr>\n" +
    "\n" +
    "<tr ng-repeat=\"(resourceType, specMax) in quota.spec.hard\" ng-if=\"resourceType !== 'resourcequotas'\" ng-class=\"{\n" +
    "                              warning: (quota.status.used[resourceType] | usageValue) >= (quota.status.hard[resourceType] | usageValue)\n" +
    "                            }\">\n" +
    "<td>\n" +
    "{{resourceType | humanizeQuotaResource}}\n" +
    "<span ng-if=\"(quota.status.used[resourceType] | usageValue) >= (quota.status.hard[resourceType] | usageValue)\" data-toggle=\"tooltip\" title=\"Quota limit reached\" class=\"pficon pficon-warning-triangle-o\" style=\"cursor: help; vertical-align: middle\"></span>\n" +
    "</td>\n" +
    "<td>\n" +
    "<span ng-if=\"!quota.status.used\">&mdash;</span>\n" +
    "<span ng-if=\"quota.status.used\">{{quota.status.used[resourceType] | usageWithUnits : resourceType}}</span>\n" +
    "</td>\n" +
    "<td>\n" +
    "<span ng-if=\"!quota.status.hard\">{{specMax | usageWithUnits : resourceType}}</span>\n" +
    "<span ng-if=\"quota.status.hard\">{{quota.status.hard[resourceType] | usageWithUnits : resourceType}}</span>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "<h1>Limit Range</h1>\n" +
    "<div ng-if=\"!(limitRanges | hashSize)\">\n" +
    "<div class=\"help-block\">{{limitRangeHelp}}</div>\n" +
    "<p><em>{{emptyMessageLimitRanges}}</em></p>\n" +
    "</div>\n" +
    "<div ng-repeat=\"(limitRangeName, limitRange) in limitRanges\">\n" +
    "<h2 ng-if=\"(limitRanges | hashSize) > 1\">{{limitRangeName}}</h2>\n" +
    "<div ng-if=\"$first\" class=\"help-block mar-bottom-md\">{{limitRangeHelp}}</div>\n" +
    "<div class=\"table-responsive\">\n" +
    "<table class=\"table\">\n" +
    "<thead>\n" +
    "<th>Resource type</th>\n" +
    "<th>\n" +
    "<span class=\"nowrap\">\n" +
    "Min\n" +
    "<i class=\"small pficon pficon-help\" data-toggle=\"tooltip\" title=\"The minimum amount of this compute resource that can be requested.\"></i>\n" +
    "</span>\n" +
    "</th>\n" +
    "<th>\n" +
    "<span class=\"nowrap\">\n" +
    "Max\n" +
    "<i class=\"small pficon pficon-help\" data-toggle=\"tooltip\" title=\"The maximum amount of this compute resource that can be requested.  The limit must also be below the maximum value.\"></i>\n" +
    "</span>\n" +
    "</th>\n" +
    "<th>\n" +
    "Default\n" +
    "<span class=\"nowrap\">\n" +
    "Request\n" +
    "<i class=\"small pficon pficon-help\" data-toggle=\"tooltip\" title=\"A container will default to request this amount of a compute resource if no request is specified. The system will guarantee the requested amount of compute resource when scheduling a container for execution. If a quota is enabled for this compute resource, the quota usage is incremented by the requested value.\"></i>\n" +
    "</span>\n" +
    "</th>\n" +
    "<th>\n" +
    "Default\n" +
    "<span class=\"nowrap\">\n" +
    "Limit\n" +
    "<i class=\"small pficon pficon-help\" data-toggle=\"tooltip\" title=\"The default limit defines the maximum amount of compute resource the container may have access to during execution if no limit is specified. If no request is made for the compute resource on the container or via a Default Request value, the container will default to request the limit.\"></i>\n" +
    "</span>\n" +
    "</th>\n" +
    "<th>\n" +
    "Max Limit/Request\n" +
    "<span class=\"nowrap\">\n" +
    "Ratio\n" +
    "<i class=\"small pficon pficon-help\" data-toggle=\"tooltip\" title=\"If specified, the compute resource must have a request and limit that are both non-zero, where limit divided by request is less than or equal to the specified amount; this represents the max burst for the compute resource during execution.\"></i>\n" +
    "</span>\n" +
    "</th>\n" +
    "</thead>\n" +
    "<tbody>\n" +
    "<tr ng-repeat-start=\"limit in limitRange.spec.limits\"></tr>\n" +
    "<tr ng-repeat=\"(type, typeLimits) in limitsByType[limitRangeName][limit.type]\">\n" +
    "<td>{{limit.type}} {{type | computeResourceLabel : true}}</td>\n" +
    "<td>{{(typeLimits.min | usageWithUnits : type) || \"&mdash;\"}}</td>\n" +
    "<td>{{(typeLimits.max | usageWithUnits : type) || \"&mdash;\"}}</td>\n" +
    "<td>{{(typeLimits.defaultRequest | usageWithUnits : type) || \"&mdash;\"}}</td>\n" +
    "<td>{{(typeLimits[\"default\"] | usageWithUnits : type) || \"&mdash;\"}}</td>\n" +
    "<td>{{typeLimits.maxLimitRequestRatio || \"&mdash;\"}}</td>\n" +
    "</tr>\n" +
    "<tr ng-repeat-end></tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/services.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header header-light\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"page-header page-header-bleed-right page-header-bleed-left\">\n" +
    "<h1>Services</h1>\n" +
    "</div>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div class=\"data-toolbar\">\n" +
    "<div class=\"data-toolbar-filter\">\n" +
    "<project-filter></project-filter>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12 gutter-top\">\n" +
    "<table class=\"table table-bordered table-hover table-mobile\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Name</th>\n" +
    "<th>Cluster IP</th>\n" +
    "<th>External IP</th>\n" +
    "<th>Ports</th>\n" +
    "<th>Selector</th>\n" +
    "<th>Age</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody ng-if=\"(services | hashSize) == 0\">\n" +
    "<tr><td colspan=\"6\"><em>{{emptyMessage}}</em></td></tr>\n" +
    "</tbody>\n" +
    "<tbody ng-repeat=\"service in services | orderObjectsByDate : true\">\n" +
    "<tr>\n" +
    "<td data-title=\"Name\"><a href=\"{{service | navigateResourceURL}}\">{{service.metadata.name}}</a></td>\n" +
    "<td data-title=\"Cluster IP\">{{service.spec.clusterIP}}</td>\n" +
    "<td data-title=\"External IP\">\n" +
    "<span ng-if=\"!service.status.loadBalancer.ingress.length\"><em>none</em></span>\n" +
    "<span ng-repeat=\"ingress in service.status.loadBalancer.ingress | limitTo: 4\">{{ingress.ip}}<span ng-if=\"!$last\">,\n" +
    "</span></span><span ng-if=\"service.status.loadBalancer.ingress.length === 5\">, {{service.status.loadBalancer.ingress[4].ip}}</span><span ng-if=\"service.status.loadBalancer.ingress.length > 5\">, and {{service.status.loadBalancer.ingress.length - 4}} others</span>\n" +
    "</td>\n" +
    "<td data-title=\"Ports\">\n" +
    "<span ng-if=\"!service.spec.ports.length\"><em>none</em></span>\n" +
    "<span ng-repeat=\"portMapping in service.spec.ports | limitTo: 4\">{{portMapping.port}}/{{portMapping.protocol}}<span ng-if=\"!$last\">,\n" +
    "</span></span><span ng-if=\"service.spec.ports.length === 5\">, {{service.spec.ports[4].port}}/{{service.spec.ports[4].protocol}}</span><span ng-if=\"service.spec.ports.length > 5\">, and {{service.spec.ports.length - 4}} others</span>\n" +
    "</td>\n" +
    "<td data-title=\"Selector\">\n" +
    "<span ng-if=\"!service.spec.selector\"><em>none</em></span>\n" +
    "<span ng-repeat=\"(selectorLabel, selectorValue) in service.spec.selector\">{{selectorLabel}}={{selectorValue}}<span ng-show=\"!$last\">, </span></span>\n" +
    "</td>\n" +
    "<td data-title=\"Age\"><relative-timestamp timestamp=\"service.metadata.creationTimestamp\" drop-suffix=\"true\"></relative-timestamp></td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/set-limits.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"middle surface-shaded\">\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container surface-shaded\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-show=\"!containers.length\">Loading...</div>\n" +
    "<form ng-if=\"containers.length\" name=\"form\">\n" +
    "<h1>Resource Limits: {{name}}</h1>\n" +
    "<div class=\"help-block\">\n" +
    "Resource limits control how much <span ng-if=\"!hideCPU\">CPU and</span> memory a container will consume on a node.\n" +
    "<div class=\"learn-more-block\" ng-class=\"{ 'gutter-bottom': showPodWarning }\">\n" +
    "<a href=\"{{'compute_resources' | helpLink}}\" target=\"_blank\">Learn more <i class=\"fa fa-external-link\" aria-hidden> </i></a>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"showPodWarning\" class=\"alert alert-warning\">\n" +
    "<span class=\"pficon pficon-warning-triangle-o\" aria-hidden=\"true\"></span>\n" +
    "Changes will only apply to new pods.\n" +
    "</div>\n" +
    "<fieldset ng-disabled=\"disableInputs\">\n" +
    "<div ng-repeat=\"container in containers\" ng-init=\"formName = container.name + '-form'\">\n" +
    "<h2 ng-if=\"containers.length > 1\">Container {{container.name}}</h2>\n" +
    "<edit-request-limit resources=\"container.resources\" type=\"cpu\" limit-ranges=\"limitRanges\" project=\"project\">\n" +
    "</edit-request-limit>\n" +
    "<edit-request-limit resources=\"container.resources\" type=\"memory\" limit-ranges=\"limitRanges\" project=\"project\">\n" +
    "</edit-request-limit>\n" +
    "</div>\n" +
    "<div ng-repeat=\"problem in cpuProblems\" class=\"has-error\">\n" +
    "<span class=\"help-block\">{{problem}}</span>\n" +
    "</div>\n" +
    "<div ng-repeat=\"problem in memoryProblems\" class=\"has-error\">\n" +
    "<span class=\"help-block\">{{problem}}</span>\n" +
    "</div>\n" +
    "<div class=\"button-group gutter-top gutter-bottom\">\n" +
    "<button type=\"submit\" class=\"btn btn-primary btn-lg\" ng-click=\"save()\" ng-disabled=\"form.$invalid || disableInputs || cpuProblems.length || memoryProblems.length\" value=\"\">Save</button>\n" +
    "<a class=\"btn btn-default btn-lg\" ng-href=\"{{resourceURL}}\">Cancel</a>\n" +
    "</div>\n" +
    "</fieldset>\n" +
    "</form>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/settings.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<breadcrumbs breadcrumbs=\"breadcrumbs\"></breadcrumbs>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<h1>\n" +
    "Project Settings\n" +
    "<div class=\"pull-right dropdown\" ng-hide=\"!project || !('projects' | canIDoAny)\">\n" +
    "<button type=\"button\" class=\"dropdown-toggle btn btn-default actions-dropdown-btn hidden-xs\" data-toggle=\"dropdown\">\n" +
    "Actions\n" +
    "<span class=\"caret\" aria-hidden=\"true\"></span>\n" +
    "</button>\n" +
    "<a href=\"\" class=\"dropdown-toggle actions-dropdown-kebab visible-xs-inline\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v\"></i><span class=\"sr-only\">Actions</span></a>\n" +
    "<ul class=\"dropdown-menu actions action-button\">\n" +
    "<li ng-if=\"project && ('projects' | canI : 'update')\">\n" +
    "<a href=\"\" role=\"button\" class=\"button-edit\" ng-click=\"setEditing(true)\" ng-class=\"{ 'disabled-link': show.editing }\">Edit</a>\n" +
    "</li>\n" +
    "<li ng-if=\"project && ('projects' | canI : 'delete)'\">\n" +
    "<delete-link class=\"button-delete\" kind=\"Project\" resource-name=\"{{project.metadata.name}}\" project-name=\"{{project.metadata.name}}\" display-name=\"{{(project | displayName)}}\" type-name-to-confirm=\"true\" alerts=\"alerts\">\n" +
    "</delete-link>\n" +
    "</li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "</h1>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<div class=\"resource-details\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-lg-6\">\n" +
    "<ng-include src=\"'views/_settings-general-info.html'\"></ng-include>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"!(quotas | hashSize) && !(clusterQuotas | hashSize)\">\n" +
    "<h2>\n" +
    "<span>Quota</span>\n" +
    "</h2>\n" +
    "<div class=\"help-block\">{{quotaHelp}}</div>\n" +
    "<p><em ng-if=\"!quotas && !clusterQuotas\">Loading...</em><em ng-if=\"quotas || clusterQuotas\">There are no resource quotas set on this project.</em></p>\n" +
    "</div>\n" +
    "<div ng-repeat=\"quota in clusterQuotas | orderBy: 'metadata.name'\" class=\"gutter-bottom\">\n" +
    "<h2>\n" +
    "Cluster Quota <span ng-if=\"(clusterQuotas | hashSize) > 1\">{{quota.metadata.name}}</span>\n" +
    "</h2>\n" +
    "<div ng-if=\"$first\" class=\"help-block\">Limits resource usage across a set of projects.</div>\n" +
    "<dl ng-if=\"quota.spec.quota.scopes.length\">\n" +
    "<dt>Scopes:</dt>\n" +
    "<dd>\n" +
    "<div ng-repeat=\"scope in quota.spec.quota.scopes\">\n" +
    "{{scope | startCase}}\n" +
    "<span class=\"text-muted small\" ng-if=\"scope | scopeDetails\">&mdash; {{scope | scopeDetails}}</span>\n" +
    "</div>\n" +
    "</dd>\n" +
    "</dl>\n" +
    "<div>\n" +
    "<div row wrap style=\"justify-content: center\">\n" +
    "<div ng-if=\"quota.status.total.hard.cpu\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">CPU <small>Request</small></h3>\n" +
    "<quota-usage-chart height=\"240\" used=\"namespaceUsageByClusterQuota[quota.metadata.name].used.cpu\" total=\"quota.status.total.hard.cpu\" cross-project-used=\"quota.status.total.used.cpu\" type=\"cpu\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div ng-if=\"quota.status.total.hard.memory\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">Memory <small>Request</small></h3>\n" +
    "<quota-usage-chart height=\"240\" used=\"namespaceUsageByClusterQuota[quota.metadata.name].used.memory\" cross-project-used=\"quota.status.total.used.memory\" total=\"quota.status.total.hard.memory\" type=\"memory\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div ng-if=\"quota.status.total.hard['requests.cpu']\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">CPU <small>Request</small></h3>\n" +
    "<quota-usage-chart height=\"240\" used=\"namespaceUsageByClusterQuota[quota.metadata.name].used['requests.cpu']\" cross-project-used=\"quota.status.total.used['requests.cpu']\" total=\"quota.status.total.hard['requests.cpu']\" type=\"cpu\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div ng-if=\"quota.status.total.hard['requests.memory']\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">Memory <small>Request</small></h3>\n" +
    "<quota-usage-chart height=\"240\" used=\"namespaceUsageByClusterQuota[quota.metadata.name].used['requests.memory']\" cross-project-used=\"quota.status.total.used['requests.memory']\" total=\"quota.status.total.hard['requests.memory']\" type=\"memory\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div ng-if=\"quota.status.total.hard['limits.cpu']\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">CPU <small>Limit</small></h3>\n" +
    "<quota-usage-chart height=\"240\" used=\"namespaceUsageByClusterQuota[quota.metadata.name].used['limits.cpu']\" cross-project-used=\"quota.status.total.used['limits.cpu']\" total=\"quota.status.total.hard['limits.cpu']\" type=\"cpu\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div ng-if=\"quota.status.total.hard['limits.memory']\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">Memory <small>Limit</small></h3>\n" +
    "<quota-usage-chart height=\"240\" used=\"namespaceUsageByClusterQuota[quota.metadata.name].used['limits.memory']\" cross-project-used=\"quota.status.total.used['limits.memory']\" total=\"quota.status.total.hard['limits.memory']\" type=\"memory\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"table-responsive\">\n" +
    "<table class=\"table\">\n" +
    "<thead>\n" +
    "<th>Resource type</th>\n" +
    "<th>Used (this project)</th>\n" +
    "<th>Used (all projects)</th>\n" +
    "<th>Max</th>\n" +
    "</thead>\n" +
    "<tbody>\n" +
    "<tr ng-if=\"!quota.status.total.used\" class=\"danger\">\n" +
    "<td colspan=\"5\">\n" +
    "<span data-toggle=\"tooltip\" title=\"Missing quota status\" class=\"pficon pficon-error-circle-o\" style=\"cursor: help\"></span>\n" +
    "Status has not been reported on this quota usage record. Any resources limited by this quota record can not be allocated.\n" +
    "</td>\n" +
    "</tr>\n" +
    "\n" +
    "<tr ng-repeat=\"(resourceType, specMax) in quota.spec.quota.hard\" ng-if=\"resourceType !== 'resourcequotas'\" ng-class=\"{\n" +
    "                              warning: (quota.status.total.used[resourceType] | usageValue) >= (quota.status.total.hard[resourceType] | usageValue)\n" +
    "                            }\">\n" +
    "<td>\n" +
    "{{resourceType | humanizeQuotaResource}}\n" +
    "<span ng-if=\"(quota.status.total.used[resourceType] | usageValue) >= (quota.status.total.hard[resourceType] | usageValue)\" data-toggle=\"tooltip\" title=\"Quota limit reached\" class=\"pficon pficon-warning-triangle-o\" style=\"cursor: help; vertical-align: middle\"></span>\n" +
    "</td>\n" +
    "<td>\n" +
    "<span ng-if=\"!namespaceUsageByClusterQuota[quota.metadata.name].used\">&mdash;</span>\n" +
    "<span ng-if=\"namespaceUsageByClusterQuota[quota.metadata.name].used\">{{namespaceUsageByClusterQuota[quota.metadata.name].used[resourceType] | usageWithUnits : resourceType}}</span>\n" +
    "</td>\n" +
    "<td>\n" +
    "<span ng-if=\"!quota.status.total.used\">&mdash;</span>\n" +
    "<span ng-if=\"quota.status.total.used\">{{quota.status.total.used[resourceType] | usageWithUnits : resourceType}}</span>\n" +
    "</td>\n" +
    "<td>\n" +
    "<span ng-if=\"!quota.status.total.hard\">{{specMax | usageWithUnits : resourceType}}</span>\n" +
    "<span ng-if=\"quota.status.total.hard\">{{quota.status.total.hard[resourceType] | usageWithUnits : resourceType}}</span>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-repeat=\"quota in quotas | orderBy: 'metadata.name'\" class=\"gutter-bottom\">\n" +
    "<h2>\n" +
    "<span ng-if=\"(clusterQuotas | hashSize)\">Project </span>Quota <span ng-if=\"(quotas | hashSize) > 1\">{{quota.metadata.name}}</span>\n" +
    "</h2>\n" +
    "<div ng-if=\"$first\" class=\"help-block\">{{quotaHelp}}</div>\n" +
    "<dl ng-if=\"quota.spec.scopes.length\">\n" +
    "<dt>Scopes:</dt>\n" +
    "<dd>\n" +
    "<div ng-repeat=\"scope in quota.spec.scopes\">\n" +
    "{{scope | startCase}}\n" +
    "<span class=\"text-muted small\" ng-if=\"scope | scopeDetails\">&mdash; {{scope | scopeDetails}}</span>\n" +
    "</div>\n" +
    "</dd>\n" +
    "</dl>\n" +
    "<div>\n" +
    "<div row wrap style=\"justify-content: center\">\n" +
    "<div column ng-if=\"quota.status.hard.cpu\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">CPU <small>Request</small></h3>\n" +
    "<quota-usage-chart used=\"quota.status.used.cpu\" total=\"quota.status.hard.cpu\" type=\"cpu\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div column ng-if=\"quota.status.hard.memory\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">Memory <small>Request</small></h3>\n" +
    "<quota-usage-chart used=\"quota.status.used.memory\" total=\"quota.status.hard.memory\" type=\"memory\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div column ng-if=\"quota.status.hard['requests.cpu']\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">CPU <small>Request</small></h3>\n" +
    "<quota-usage-chart used=\"quota.status.used['requests.cpu']\" total=\"quota.status.hard['requests.cpu']\" type=\"cpu\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div column ng-if=\"quota.status.hard['requests.memory']\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">Memory <small>Request</small></h3>\n" +
    "<quota-usage-chart used=\"quota.status.used['requests.memory']\" total=\"quota.status.hard['requests.memory']\" type=\"memory\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div ng-if=\"quota.status.hard['limits.cpu']\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">CPU <small>Limit</small></h3>\n" +
    "<quota-usage-chart used=\"quota.status.used['limits.cpu']\" total=\"quota.status.hard['limits.cpu']\" type=\"cpu\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "<div ng-if=\"quota.status.hard['limits.memory']\" class=\"mar-lg\">\n" +
    "<h3 class=\"text-center\">Memory <small>Limit</small></h3>\n" +
    "<quota-usage-chart used=\"quota.status.used['limits.memory']\" total=\"quota.status.hard['limits.memory']\" type=\"memory\" class=\"quota-chart\"></quota-usage-chart>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"table-responsive\">\n" +
    "<table class=\"table\">\n" +
    "<thead>\n" +
    "<th>Resource type</th>\n" +
    "<th>Used</th>\n" +
    "<th>Max</th>\n" +
    "</thead>\n" +
    "<tbody>\n" +
    "<tr ng-if=\"!quota.status.used\" class=\"danger\">\n" +
    "<td colspan=\"5\">\n" +
    "<span data-toggle=\"tooltip\" title=\"Missing quota status\" class=\"pficon pficon-error-circle-o\" style=\"cursor: help\"></span>\n" +
    "Status has not been reported on this quota usage record. Any resources limited by this quota record can not be allocated.\n" +
    "</td>\n" +
    "</tr>\n" +
    "\n" +
    "<tr ng-repeat=\"(resourceType, specMax) in quota.spec.hard\" ng-if=\"resourceType !== 'resourcequotas'\" ng-class=\"{\n" +
    "                              warning: (quota.status.used[resourceType] | usageValue) >= (quota.status.hard[resourceType] | usageValue)\n" +
    "                            }\">\n" +
    "<td>\n" +
    "{{resourceType | humanizeQuotaResource}}\n" +
    "<span ng-if=\"(quota.status.used[resourceType] | usageValue) >= (quota.status.hard[resourceType] | usageValue)\" data-toggle=\"tooltip\" title=\"Quota limit reached\" class=\"pficon pficon-warning-triangle-o\" style=\"cursor: help; vertical-align: middle\"></span>\n" +
    "</td>\n" +
    "<td>\n" +
    "<span ng-if=\"!quota.status.used\">&mdash;</span>\n" +
    "<span ng-if=\"quota.status.used\">{{quota.status.used[resourceType] | usageWithUnits : resourceType}}</span>\n" +
    "</td>\n" +
    "<td>\n" +
    "<span ng-if=\"!quota.status.hard\">{{specMax | usageWithUnits : resourceType}}</span>\n" +
    "<span ng-if=\"quota.status.hard\">{{quota.status.hard[resourceType] | usageWithUnits : resourceType}}</span>\n" +
    "</td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div ng-if=\"(limitRanges | hashSize) === 0\">\n" +
    "<h2>Limit Range</h2>\n" +
    "<div class=\"help-block\">{{limitRangeHelp}}</div>\n" +
    "<p><em>{{emptyMessageLimitRanges}}</em></p>\n" +
    "</div>\n" +
    "<div ng-repeat=\"(limitRangeName, limitRange) in limitRanges\">\n" +
    "<h2>\n" +
    "Limit Range <span ng-if=\"(limitRanges | hashSize) > 1\">{{limitRangeName}}</span>\n" +
    "</h2>\n" +
    "<div ng-if=\"$first\" class=\"help-block\">{{limitRangeHelp}}</div>\n" +
    "<div class=\"table-responsive\">\n" +
    "<table class=\"table\">\n" +
    "<thead>\n" +
    "<th>Resource type</th>\n" +
    "<th>\n" +
    "<span class=\"nowrap\">\n" +
    "Min\n" +
    "<i class=\"small pficon pficon-help\" data-toggle=\"tooltip\" title=\"The minimum amount of this compute resource that can be requested.\"></i>\n" +
    "</span>\n" +
    "</th>\n" +
    "<th>\n" +
    "<span class=\"nowrap\">\n" +
    "Max\n" +
    "<i class=\"small pficon pficon-help\" data-toggle=\"tooltip\" title=\"The maximum amount of this compute resource that can be requested.  The limit must also be below the maximum value.\"></i>\n" +
    "</span>\n" +
    "</th>\n" +
    "<th>\n" +
    "Default\n" +
    "<span class=\"nowrap\">\n" +
    "Request\n" +
    "<i class=\"small pficon pficon-help\" data-toggle=\"tooltip\" title=\"A container will default to request this amount of a compute resource if no request is specified. The system will guarantee the requested amount of compute resource when scheduling a container for execution. If a quota is enabled for this compute resource, the quota usage is incremented by the requested value.\"></i>\n" +
    "</span>\n" +
    "</th>\n" +
    "<th>\n" +
    "Default\n" +
    "<span class=\"nowrap\">\n" +
    "Limit\n" +
    "<i class=\"small pficon pficon-help\" data-toggle=\"tooltip\" title=\"The default limit defines the maximum amount of compute resource the container may have access to during execution if no limit is specified. If no request is made for the compute resource on the container or via a Default Request value, the container will default to request the limit.\"></i>\n" +
    "</span>\n" +
    "</th>\n" +
    "<th>\n" +
    "Max Limit/Request\n" +
    "<span class=\"nowrap\">\n" +
    "Ratio\n" +
    "<i class=\"small pficon pficon-help\" data-toggle=\"tooltip\" title=\"If specified, the compute resource must have a request and limit that are both non-zero, where limit divided by request is less than or equal to the specified amount; this represents the max burst for the compute resource during execution.\"></i>\n" +
    "</span>\n" +
    "</th>\n" +
    "</thead>\n" +
    "<tbody>\n" +
    "<tr ng-repeat-start=\"limit in limitRange.spec.limits\"></tr>\n" +
    "<tr ng-repeat=\"(type, typeLimits) in limitsByType[limitRangeName][limit.type]\">\n" +
    "<td>{{limit.type}} {{type | computeResourceLabel : true}}</td>\n" +
    "<td>{{(typeLimits.min | usageWithUnits : type) || \"&mdash;\"}}</td>\n" +
    "<td>{{(typeLimits.max | usageWithUnits : type) || \"&mdash;\"}}</td>\n" +
    "<td>{{(typeLimits.defaultRequest | usageWithUnits : type) || \"&mdash;\"}}</td>\n" +
    "<td>{{(typeLimits[\"default\"] | usageWithUnits : type) || \"&mdash;\"}}</td>\n" +
    "<td>{{typeLimits.maxLimitRequestRatio || \"&mdash;\"}}</td>\n" +
    "</tr>\n" +
    "<tr ng-repeat-end></tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/storage.html',
    "<project-header class=\"top-header\"></project-header>\n" +
    "<project-page>\n" +
    "\n" +
    "<div class=\"middle-section\">\n" +
    "<div class=\"middle-container\">\n" +
    "<div class=\"middle-header header-light\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"page-header page-header-bleed-right page-header-bleed-left\">\n" +
    "<h1>Storage</h1>\n" +
    "</div>\n" +
    "<alerts alerts=\"alerts\"></alerts>\n" +
    "<div ng-if=\"!renderOptions.showGetStarted\" class=\"data-toolbar\">\n" +
    "<div class=\"data-toolbar-filter\">\n" +
    "<project-filter></project-filter>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"middle-content\">\n" +
    "<div class=\"container-fluid\">\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<div class=\"section-header page-header-bleed-right page-header-bleed-left\">\n" +
    "<div class=\"hidden-xs pull-right\" ng-if=\"project && ('persistentvolumeclaims' | canI : 'create')\">\n" +
    "<a ng-href=\"project/{{project.metadata.name}}/create-pvc\" class=\"btn btn-default\">Request Storage</a>\n" +
    "</div>\n" +
    "<h2>Persistent Volume Claims</h2>\n" +
    "<div class=\"visible-xs-block mar-bottom-sm\" ng-if=\"project && ('persistentvolumeclaims' | canI : 'create')\">\n" +
    "<a ng-href=\"project/{{project.metadata.name}}/create-pvc\" class=\"btn btn-default\">Request Storage</a>\n" +
    "</div>\n" +
    "</div>\n" +
    "<table class=\"table table-bordered table-hover table-mobile\" ng-class=\"{ 'table-empty': (pvcs | hashSize) === 0 }\">\n" +
    "<thead>\n" +
    "<tr>\n" +
    "<th>Name</th>\n" +
    "<th>Status</th>\n" +
    "<th>Capacity</th>\n" +
    "<th>Access Modes</th>\n" +
    "<th>Age</th>\n" +
    "</tr>\n" +
    "</thead>\n" +
    "<tbody ng-if=\"(pvcs | hashSize) === 0\">\n" +
    "<tr><td colspan=\"5\"><em>{{emptyMessage}}</em></td></tr>\n" +
    "</tbody>\n" +
    "<tbody ng-repeat=\"pvc in pvcs | orderObjectsByDate : true\">\n" +
    "<tr>\n" +
    "<td data-title=\"Name\"><a ng-href=\"{{pvc | navigateResourceURL}}\">{{pvc.metadata.name}}</a></td>\n" +
    "<td data-title=\"Status\">\n" +
    "<status-icon status=\"pvc.status.phase\" disable-animation></status-icon>\n" +
    "{{pvc.status.phase}}\n" +
    "<span ng-if=\"pvc.spec.volumeName\">to volume <strong>{{pvc.spec.volumeName}}</strong></span>\n" +
    "</td>\n" +
    "<td data-title=\"Capacity\">\n" +
    "<span ng-if=\"pvc.spec.volumeName\">\n" +
    "<span ng-if=\"pvc.status.capacity['storage']\">{{pvc.status.capacity['storage'] | usageWithUnits: 'storage'}}</span>\n" +
    "<span ng-if=\"!pvc.status.capacity['storage']\">unknown</span>\n" +
    "</span>\n" +
    "<span ng-if=\"!pvc.spec.volumeName\">\n" +
    "<span>-</span>\n" +
    "</span>\n" +
    "</td>\n" +
    "<td data-title=\"Access Modes\">{{pvc.spec.accessModes | accessModes:'long' | join}}</td>\n" +
    "<td data-title=\"Age\"><relative-timestamp timestamp=\"pvc.metadata.creationTimestamp\" drop-suffix=\"true\"></relative-timestamp></td>\n" +
    "</tr>\n" +
    "</tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</project-page>"
  );


  $templateCache.put('views/util/error.html',
    "<default-header class=\"top-header\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"sidebar-left collapse navbar-collapse navbar-collapse-2\">\n" +
    "<navbar-utility-mobile></navbar-utility-mobile>\n" +
    "</div>\n" +
    "<div class=\"middle surface-shaded\">\n" +
    "<div class=\"container surface-shaded\">\n" +
    "<div>\n" +
    "<h1>Error</h1>\n" +
    "<h4>{{errorMessage}}</h4>\n" +
    "<div>{{errorDetails}}</div>\n" +
    "<br>\n" +
    "<div>Return to the <a href=\"\" ng-click=\"reloadConsole()\">console</a>.</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/util/logout.html',
    "<default-header class=\"top-header logged-out\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"middle surface-shaded\">\n" +
    "<div class=\"container surface-shaded\">\n" +
    "<div>\n" +
    "<h1>Log out</h1>\n" +
    "<div ng-bind-html=\"logoutMessage\"></div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );


  $templateCache.put('views/util/oauth.html',
    "<default-header class=\"top-header logged-out\"></default-header>\n" +
    "<div class=\"wrap no-sidebar\">\n" +
    "<div class=\"middle surface-shaded\">\n" +
    "<div class=\"container surface-shaded\">\n" +
    "<div ng-if=\"!confirmUser\">\n" +
    "<h1 style=\"margin-top: 10px\">Logging in&hellip;</h1>\n" +
    "<p>Please wait while you are logged in&hellip;</p>\n" +
    "</div>\n" +
    "<div ng-if=\"confirmUser && !overriddenUser\">\n" +
    "<h1 style=\"margin-top: 10px\">Confirm Login</h1>\n" +
    "<p>You are being logged in as <code>{{confirmUser.metadata.name}}</code>.</p>\n" +
    "<button class=\"btn btn-lg btn-primary\" type=\"button\" ng-click=\"completeLogin();\">Continue</button>\n" +
    "<button class=\"btn btn-lg btn-default\" type=\"button\" ng-click=\"cancelLogin();\">Cancel</button>\n" +
    "</div>\n" +
    "<div ng-if=\"confirmUser && overriddenUser\">\n" +
    "<h1 style=\"margin-top: 10px\">Confirm User Change</h1>\n" +
    "<p>You are about to change users from <code>{{overriddenUser.metadata.name}}</code> to <code>{{confirmUser.metadata.name}}</code>.</p>\n" +
    "<p>If this is unexpected, click Cancel. This could be an attempt to trick you into acting as another user.</p>\n" +
    "<button class=\"btn btn-lg btn-danger\" type=\"button\" ng-click=\"completeLogin();\">Switch Users</button>\n" +
    "<button class=\"btn btn-lg btn-primary\" type=\"button\" ng-click=\"cancelLogin();\">Cancel</button>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"
  );

}]);