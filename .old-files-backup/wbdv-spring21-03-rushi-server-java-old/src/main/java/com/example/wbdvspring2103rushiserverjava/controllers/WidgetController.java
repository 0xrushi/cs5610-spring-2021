package com.example.wbdvspring2103rushiserverjava.controllers;

import com.example.wbdvspring2103rushiserverjava.models.Widget;
import com.example.wbdvspring2103rushiserverjava.services.WidgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * {
 *     "id": 1616286780181,
 *     "topicId": "1",
 *     "name": "name",
 *     "type": null,
 *     "widgetOrder": null,
 *     "text": null,
 *     "src": null,
 *     "size": null,
 *     "width": null,
 *     "height": null,
 *     "cssClass": null,
 *     "style": null,
 *     "value": null
 * }
 * **/

@RestController
public class WidgetController {
     @Autowired
     WidgetService service;//= new WidgetService();

     @PostMapping("/api/topics/{tid}/widgets")
     public Widget createWidget(
             @PathVariable("tid") String tid,
             @RequestBody Widget widget) {
          return service.createWidget(tid, widget);
     }

     @GetMapping("/api/topics/{tid}/widgets")
     public List<Widget> findWidgetsForTopic(@PathVariable("tid") String topicId) {
          return service.findWidgetsForTopic(topicId);
     }

     @PutMapping("/api/widgets/{wid}")
     public int updateWidget(
             @PathVariable("wid") Long wid,
             @RequestBody Widget widget
     ) {
          return service.updateWidget(wid, widget);
     }

     @DeleteMapping("/api/widgets/{wid}")
     public int deleteWidget(
             @PathVariable("wid") Long wid
     ) {
          return service.deleteWidget(wid);
     }

     @GetMapping("/api/widgets")
     public List<Widget> findAllWidgets() {
          return service.findAllWidgets();
     }

     @GetMapping("/api/widgets/{wid}")
     public Widget findWidgetById(
             @PathVariable("wid") Long id) {
          return service.findWidgetById(id);
     }

}
