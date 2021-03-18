<?php
declare(strict_types=1);

namespace App\Controller;

use App\Model\Entity\User;
use App\Model\Table\UsersTable;
use Cake\Datasource\Exception\RecordNotFoundException;
use Cake\Datasource\ResultSetInterface;
use Cake\Http\Response;

/**
 * Users Controller
 *
 * @property UsersTable $Users
 * @method User[]|ResultSetInterface paginate($object = null, array $settings = [])
 */
class UsersController extends AppController
{
    /**
     * Index method
     *
     * @return Response|null|void Renders view
     */
    public function index()
    {
        $users =$this->Users->find();
        $this->set(compact('users'));
        $this->viewBuilder()->setOption('serialize', true);
    }

    /**
     * View method
     *
     * @param string|null $id User id.
     * @return Response|null|void Renders view
     * @throws RecordNotFoundException When record not found.
     */
    public function view($id = null)
    {
        $user = $this->Users->get($id, [
            'contain' => [],
        ]);

        $this->set(compact('user'));
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
        $user = $this->Users->newEmptyEntity();
        if ($this->request->is('post')) {
            $user = $this->Users->patchEntity($user, $this->request->getData());
            if ($this->Users->save($user)) {
                $res = ["code" => 200,
                    "message" => "The account has been signed up!"];
            }
            else{
                $res = ["code" => 400,
                    "message" => "The user could not be saved. Please, try again."];
            }

        }
        $this->set(compact('res'));
        $this->viewBuilder()->setOption('serialize', true);

    }

    /**
     * Edit method
     *
     * @param string|null $id User id.
     * @return Response|null|void Redirects on successful edit, renders view otherwise.
     * @throws RecordNotFoundException When record not found.
     */
    public function edit($id = null)
    {
        $res = [];
        $user = $this->Users->get($id, [
            'contain' => [],
        ]);
        if ($this->request->is(['patch', 'post', 'put'])) {
            $user = $this->Users->patchEntity($user, $this->request->getData());
            if ($this->Users->save($user)) {
                $res = ["code" => 200,
                    "message" => "The user has been save"];
            }
           else $res = ["code" => 400,
               "message" => "The user has not been save. Please try again!"];
        }
        $this->set(compact('res'));
        $this->viewBuilder()->setOption('serialize', true);

    }

    /**
     * Delete method
     *
     * @param string|null $id User id.
     * @return Response|null|void Redirects to index.
     * @throws RecordNotFoundException When record not found.
     */
    public function delete($id = null)
    {
        $res=[];
        $this->request->allowMethod(['post', 'delete']);
        $user = $this->Users->get($id);
        if ($this->Users->delete($user)) {
            $res = ["code" => 200,
                "message" => "The user has been deleted."];
        } else {
            $res = ["code" => 400,
                "message" => 'The user could not be deleted. Please, try again.'];
        }

        $this->set($res);
        $this->viewBuilder()->setOption('serialize', true);

    }
}
