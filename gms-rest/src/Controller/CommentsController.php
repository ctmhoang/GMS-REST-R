<?php
declare(strict_types=1);

namespace App\Controller;

use App\Model\Entity\Comment;
use App\Model\Table\CommentsTable;
use Cake\Datasource\Exception\RecordNotFoundException;
use Cake\Datasource\ResultSetInterface;
use Cake\Http\Response;

/**
 * Comments Controller
 *
 * @property CommentsTable $Comments
 * @method Comment[]|ResultSetInterface paginate($object = null, array $settings = [])
 */
class CommentsController extends AppController
{
    /**
     * Index method
     *
     * @return Response|null|void Renders view
     */
    public function index()
    {
        $comments = $this->Comments->find();

        $this->set(compact('comments'));
        $this->viewBuilder()->setOption('serialize', true);

    }

    /**
     * View method
     *
     * @param string|null $id Comment id.
     * @return Response|null|void Renders view
     * @throws RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $comment = $this->Comments->get($id, [
            'contain' => [],
        ]);

        $this->set(compact('comment'));
        $this->viewBuilder()->setOption('serialize', true);

    }

    /**
     * Add method
     *
     * @return Response|null|void Redirects on successful add, renders view otherwise.
     */
    public function add()
    {
        $res = [];
        $comment = $this->Comments->newEmptyEntity();
        if ($this->request->is('post')) {
            $comment = $this->Comments->patchEntity($comment, $this->request->getData());
            if ($this->Comments->save($comment)) {
                $res = ["code" => 200,
                    "message" => 'The comment has been saved.'];

            } else
                $res = ["code" => 400,
                    "message" => 'The comment could not be saved. Please, try again.'];
        }
        $this->set(compact('res'));
        $this->viewBuilder()->setOption('serialize', true);

    }

    /**
     * Edit method
     *
     * @param string|null $id Comment id.
     * @return Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $res = [];
        $comment = $this->Comments->get($id, [
            'contain' => [],
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $comment = $this->Comments->patchEntity($comment, $this->request->getData());
            if ($this->Comments->save($comment)) {
                $res = ["code" => 200,
                    "message" => 'The comment has been saved.'];


            } else
                $res = ["code" => 400,
                    "message" => 'The comment could not be saved. Please, try again.'];
        }
        $this->set(compact('res'));
        $this->viewBuilder()->setOption('serialize', true);

    }

    /**
     * Delete method
     *
     * @param string|null $id Comment id.
     * @return Response|null|void Redirects to index.
     * @throws RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $this->request->allowMethod(['post', 'delete']);
        $comment = $this->Comments->get($id);
        if ($this->Comments->delete($comment)) {
            $res = ["code" => 200,
                "message" => 'The comment has been deleted.'];
        } else {
            $res = ["code" => 400,
                "message" => 'The comment could not be deleted. Please, try again.'];
        }

        $this->set($res);
        $this->viewBuilder()->setOption('serialize', true);

    }

    public function blog(string $id)
    {
        $comments = $this->Comments->find()->where(['pid' => 11])->toArray();
        $this->set($comments);
        $this->viewBuilder()->setOption('serialize', true);
    }
}
